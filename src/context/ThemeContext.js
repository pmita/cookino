import { createContext, useReducer } from "react";

export const ThemeContext = createContext(); 
//current state, and action we have dispatched
const themeReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload };
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload };
        default:
            return state;
    }
}

// const initialState = {
//     color: 'blue'
// }

export const ThemeProvider = ({ children }) => {
    //STATE & VARIABLES
    const [state, dispatch] =useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    });

    //FUNCTIONS
    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color });
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode });
    }

    return(
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}