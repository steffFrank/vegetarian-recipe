import { createContext, useReducer } from "react";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
const diet = process.env.REACT_APP_DIET;

const initialState = {
    inputData: "",
    url: ""
}


const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case "SET_INPUT":
            return {...state, inputData: payload}
        case "SET_URL":
            return {...state, url: payload}
        default:
            return state;
    }
}

export const RecipesContext = createContext(initialState);

export const RecipesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputData = event => {
        dispatch({type: "SET_INPUT", payload: event.target.value });
    }
    const createUrl = id => {
        if(!state.inputData) {
            return;
        }
        let url = "";
        if (id !== "") {
            url = `${baseUrl}${id}/information?/${apiQuery}`;
        } else {
            url = `${baseUrl}complexSearch?${apiQuery}&diet=${diet}&query=${state.inputData}`;
        }
        dispatch({type: "SET_URL", url });
    }
    
    const value = {
        handleInputData,
        createUrl,
        inputData: state.inputData,
        url: state.url
    };

    return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
}