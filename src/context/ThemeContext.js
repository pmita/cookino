import { createContext } from "react";

export const ThemeContext = createContext(); //return a new context object

export const ThemeProvider = ({ children }) => {
    return(
        <ThemeContext.Provider value={{ color: 'blue' }}>
            {children}
        </ThemeContext.Provider>
    )
}