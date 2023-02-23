import { createContext, useState } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
const diet = process.env.REACT_APP_DIET;
const resultsNumber = 30;

export const RecipesContext = createContext({
    inputData: "", 
    url: "",
    getRecipesFromInput: () => {},
    recipesResult: {
        isLoading: true,
        recipes: [],
        error: null
    },
});

export const RecipesProvider = ({children}) => {
    const [inputData, setInputData] = useState("");
    const [url, setUrl] = useState("");
    const [recipesResult, setRecipesResult] = useState({
        isLoading: true,
        recipes: [],
        error: null
    });

    const handleInputData = event => {
        setInputData(event.target.value);
    }
    
    const getRecipesFromInput = async () => {
        if (!inputData || recipesResult.isLoading) return;
        const newUrl = `${baseUrl}complexSearch?${apiQuery}&diet=${diet}&query=${inputData}&number=${resultsNumber}`;
        try {
            const response = await axios.get(newUrl);
            const data = response.data.results;
            setRecipesResult(prevResult => {
                return {
                    ...prevResult,
                    isLoading : false,
                    recipes: data
                }
            });
           setUrl(newUrl);
        } catch(err) {
            setRecipesResult(prevResult => {
                return {
                    ...prevResult,
                    isLoading : false,
                    error: err
                }
            });
        }
    }
        
    const value = {
        handleInputData,
        inputData,
        getRecipesFromInput,
        url,
        recipesResult,
    };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
}