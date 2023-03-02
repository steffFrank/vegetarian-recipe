import { createContext, useState } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
const diet = process.env.REACT_APP_DIET;
const resultsNumber = 30;

const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

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
    const favoriteRecipes = getFavorites();
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
    const updateRecipeFavoriteStatus = (recipeId, isFavorite) => {
        setRecipesResult(prevResult => {
          const recipes = prevResult.recipes.map(recipe => {
            if (recipe.id === recipeId) {
              return { ...recipe, isFavorite };
            } else {
              return recipe;
            }
          });
      
          return {
            ...prevResult,
            recipes
          };
        });
      }

    const getRecipesFromInput = async () => {
        if (!inputData) return;
        const newUrl = `${baseUrl}complexSearch?${apiQuery}&diet=${diet}&query=${inputData}&number=${resultsNumber}`;
        try {
            const response = await axios.get(newUrl);
            const data = response.data.results;
            // Add isFavorite to each recipe not present in favoritesRecipe
            const newData = data.map(recipe => {
                const isFavoriteRecipe = favoriteRecipes.find(favoriteRecipe => recipe.id === favoriteRecipe.id);
                if (isFavoriteRecipe) {
                    return isFavoriteRecipe;
                } else {
                    return {...recipe, isFavorite: false};
                }
            })
            setRecipesResult(prevResult => {
                return {
                    ...prevResult,
                    isLoading : false,
                    recipes: newData
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
        updateRecipeFavoriteStatus
    };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
}