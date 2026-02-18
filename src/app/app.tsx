import {AppRouter} from "./router/app-router.tsx";
import {Header} from "@/widgets/header";
// import {useTheme} from "@/shared/hooks/useTheme.ts";


export const App = () => {
    // const {theme, toggleTheme} = useTheme()

    return (
        // <div className={`app ${theme}`}>
        <div className={`app light`}>
            <Header/>
            <AppRouter/>
        </div>
    )
}

