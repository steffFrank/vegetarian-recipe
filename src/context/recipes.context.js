import { createContext, useState } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
const diet = process.env.REACT_APP_DIET;
const resultsNumber = 30;

export const RecipesContext = createContext({
    inputData: "", 
    url: "",
    resultsRecipes: {
        isLoading: true,
        recipes: [],
        error: null
    },
    resultsId: {
        isLoading: true,
        recipe: {},
        error: null
    }
});

export const RecipesProvider = ({children}) => {
    const [inputData, setInputData] = useState("");
    const [url, setUrl] = useState("");

    const [resultsRecipes, setResultsRecipes] = useState( {
        isLoading: true,
        recipes: [],
        error: null
    });
    const [resultsId, setResultsId] = useState( {
        isLoading: true,
        recipe: {},
        error: null
    });

    const handleInputData = event => {
        setInputData(event.target.value);
    }
    
    const getDataByInput = async () => {
        if (!inputData) return;
        const newUrl = `${baseUrl}complexSearch?${apiQuery}&diet=${diet}&query=${inputData}&number=${resultsNumber}`;
        setUrl(newUrl);
        try {
            const response = await axios.get(newUrl);
            const data = response.data.results;
            setResultsRecipes(prevResults => {
                return {
                    ...prevResults,
                    isLoading: false,
                    recipes: data
                }
            });
        } catch(error) {
            setResultsRecipes(prevResults => {
                return {
                    ...prevResults,
                    error: error,
                    isLoading: false
                }
            })
        }
    }
        

    const getDataById = async (id) => {
        if (!id) return;
        const newUrl = `${baseUrl}${id}/information?${apiQuery}`;
    
        try {
            const response = await axios.get(newUrl);
            const data = response.data;
            setResultsId(prevResults => {
                return {
                    ...prevResults,
                    isLoading: false,
                    recipe: data
                }
            });
        } catch(error) {
            setResultsId(prevResults => {
                return {
                    ...prevResults,
                    error: error,
                    isLoading: false
                }
            });
        }
    }

    const value = {
        handleInputData,
        inputData,
        resultsRecipes,
        getDataByInput,
        getDataById,
        url,
        resultsId
    };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
}