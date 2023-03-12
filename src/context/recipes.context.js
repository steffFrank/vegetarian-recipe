import { createContext, useState, useReducer } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiQuery= `apiKey=${process.env.REACT_APP_APIKEY}`;
const diet = process.env.REACT_APP_DIET;
const resultsNumber = 30;

const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}
const favoriteRecipes = getFavorites();
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

const INITIAL_STATE = {
    inputData: "",
    url: "",
    recipesResult: {
        isLoading: true,
        recipes: [],
        error: null
    },
}

const RECIPES_ACTION_TYPES = {
    SET_INPUT_DATA: "SET_INPUT_DATA",
    SET_URL: "SET_URL",
    UPDATE_RECIPE_FAVORITE_STATUS:"UPDATE_RECIPE_FAVORITE_STATUS",
    SET_RECIPES_FROM_INPUT: "SET_RECIPES_FROM_INPUT"
}

const recipesReducer = (state, action) => {
    const {type, payload ={} } = action;

    switch (type) {
        case RECIPES_ACTION_TYPES.SET_INPUT_DATA:
            return {
                ...state,
                inputData: payload
            }
        case RECIPES_ACTION_TYPES.SET_URL:
            return {
                ...state,
                url: payload
            }
        case RECIPES_ACTION_TYPES.UPDATE_RECIPE_FAVORITE_STATUS:
            const { recipeId, isFavorite } = payload;
            const newRecipes = state.recipesResult.recipes.map(recipe => {
                if (recipe.id === recipeId) {
                  return { ...recipe, isFavorite };
                } else {
                  return recipe;
                }
              });
              return {
                ...state,
                recipesResult: {
                    ...state.recipesResult,
                    recipes: newRecipes
                }
              }
        case RECIPES_ACTION_TYPES.SET_RECIPES_FROM_INPUT:
            if (payload.data) {
                const newData = payload.data.map(recipe => {
                    const isFavoriteRecipe = favoriteRecipes.find(favoriteRecipe => recipe.id === favoriteRecipe.id);
                    if (isFavoriteRecipe) {
                        return isFavoriteRecipe;
                    } else {
                        return {...recipe, isFavorite: false};
                    }
                })
                return {
                    ...state,
                    recipesResult: { 
                        ...state.recipesResult,
                        isLoading : false,
                        recipes: newData
                    }
                }
            } else {
                return {
                    ...state,
                    recipesResult: {
                        ...state.recipesResult,
                        isLoading: false,
                        error: payload
                    }
                }
            }
           
        default:
            throw new Error(`Unhandled action type ${type} in recipesReducer`);
    }
}

export const RecipesProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(recipesReducer, INITIAL_STATE);
    const {url, inputData, recipesResult} = state;

    const handleInputData = event => {
        dispatch({ type: RECIPES_ACTION_TYPES.SET_INPUT_DATA, payload: event.target.value });
    }
    
    const updateRecipeFavoriteStatus = (recipeId, isFavorite) => {
        dispatch({ type: RECIPES_ACTION_TYPES.UPDATE_RECIPE_FAVORITE_STATUS, payload: {recipeId, isFavorite}});
      }

    const getRecipesFromInput = async () => {
        const newUrl = `${baseUrl}complexSearch?${apiQuery}&diet=${diet}&query=${inputData}&number=${resultsNumber}`;
        try {
            const response = await axios.get(newUrl);
            const data = response.data.results;
           dispatch({ type: RECIPES_ACTION_TYPES.SET_RECIPES_FROM_INPUT, payload: { data }});
           dispatch({ type: RECIPES_ACTION_TYPES.SET_URL, payload: newUrl})
        } catch(err) {
            dispatch({ type: RECIPES_ACTION_TYPES.SET_RECIPES_FROM_INPUT, payload: err});
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