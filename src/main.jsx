import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {MetaProvider} from "@/components/common/MetaContext.jsx";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MetaProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MetaProvider>
    </StrictMode>,
)
