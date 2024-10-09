import App from './App.tsx'
import store from './redux/store.ts'
import themeOverride from './themes/overrideTheme.ts'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ModalsProvider } from "@mantine/modals";

import './index.css'
import '@mantine/core/styles.css';



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={themeOverride}>
            <ModalsProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </ModalsProvider>
        </MantineProvider>
    </StrictMode>,
)