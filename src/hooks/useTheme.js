//We need both the context and the useContext hook
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
    const context = useContext(ThemeContext);
    
    //In case we try to use the context outside its defined scope
    if(context === undefined){
        throw new Error("useTheme() must be used inside a ThemeProvider");
    }

    return context;
}