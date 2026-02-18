import {createRoot} from 'react-dom/client'
import {App} from './app.tsx'
import {BrowserRouter} from "react-router-dom";
import '@/shared/assets/styles/index.scss'
import '@/shared/assets/styles/tailwind/tailwind.css'
import {ThemeProvider} from "@/app/providers/theme-provider/ui/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)
