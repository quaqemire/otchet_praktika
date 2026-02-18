import {Theme, ThemeContext} from "@/shared/theme-context";
import {type ReactNode, useMemo, useState} from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem("theme") as Theme || Theme.LIGHT;

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultValue = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

