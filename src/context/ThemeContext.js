import { createContext, useReducer } from "react";

export const ThemeContext = createContext(); 
//current state, and action we have dispatched
const themeReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
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
        color: 'blue'
    });

    //Functions
    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color });
    }

    return(
        <ThemeContext.Provider value={{ ...state, changeColor }}>
            {children}
        </ThemeContext.Provider>
    )
}