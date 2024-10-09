import Cookies from "js-cookie";
import React, { useEffect } from "react";

import { ROUTER } from "@/constants/router";
import { TOKEN_TYPE } from "@/model/variable";
import { LoadingOverlay } from "@mantine/core";
import { useNavigate, useOutlet } from "react-router";
import { useRefreshTokenMutation } from "@/redux/api/auth";



const ProtectedLayout: React.FC = () => {
    const outlet = useOutlet();
    const navigation = useNavigate();

    const [refresh, { isLoading }] = useRefreshTokenMutation();

    const accessToken = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);

    useEffect(() => {
        if(!accessToken) {
            navigation(ROUTER.LOGIN.href);
        }
    }, [accessToken]);

    useEffect(() => {
        refresh(null);
    }, []);

    if(isLoading) {
        return <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
    }

    if(!accessToken) {
        return <></>
    }

    return (
        <>{outlet}</>
    )
}

export default ProtectedLayout;