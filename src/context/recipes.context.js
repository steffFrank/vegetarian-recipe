import { createContext, useState, useEffect } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
const diet = process.env.REACT_APP_DIET;
const resultsNumber = 30;

export const RecipesContext = createContext({
    inputData: "", 
    url: "",
    results: {
        isLoading: true,
        recipes: [],
        error: null
    }
});

export const RecipesProvider = ({children}) => {
    const [inputData, setInputData] = useState("");
    const [url, setUrl] = useState("");
    const [results, setResults] = useState( {
        isLoading: true,
        recipes: [],
        error: null
    })

    const handleInputData = event => {
        setInputData(event.target.value);
    }

    const createUrl = id => {
        if(!inputData) {
            return;
        }
        let url = "";
        if (id !== "") {
            url = `${baseUrl}${id}/information?/${apiQuery}`;
        } else {
            url = `${baseUrl}complexSearch?${apiQuery}&diet=${diet}&query=${inputData}&number=${resultsNumber}`;
        }
        setUrl(url);
    }
    
    useEffect(() => {
        const getData = async (url) => {
            try {
                if (!url) return;
                const response = await axios.get(url);
                const data = response.data;
                setResults(prevResults => {
                    return {
                        ...prevResults,
                        isLoading: false,
                        recipes: data.results
                    }
                })
            } catch(error) {
                setResults(prevResults => {
                    return {
                        ...prevResults,
                        error: error,
                        isLoading: false
                    }
                })
            }
        }
        getData(url);
    }, [url]);

    const value = {
        handleInputData,
        createUrl,
        inputData,
        url,
        results
    };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
}