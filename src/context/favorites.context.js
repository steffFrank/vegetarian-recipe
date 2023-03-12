import { createContext, useEffect, useContext, useReducer, useCallback, useMemo } from "react";
import { RecipesContext } from "./recipes.context";


const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export const FavoritesContext = createContext({
    toggleFavorites: () => {},
    favoriteRecipes: []
});

const FAVORITE_ACTION_TYPES = {
    GET_FAVORITE_RECIPES: "GET_FAVORITE_RECIPES",
    TOGGLE_FAVORITE_RECIPE: "TOGGLE_FAVORITE_RECIPE"
}

const favoriteReducer = (state, action) => {
    const {type, payload = {} } = action;

    switch (type) {
        case FAVORITE_ACTION_TYPES.GET_FAVORITE_RECIPES:
            return {
                favoriteRecipes: payload
            }
        case FAVORITE_ACTION_TYPES.TOGGLE_FAVORITE_RECIPE:
            
            const checkedRecipe = state.favoriteRecipes.find(favoriteRecipe => favoriteRecipe.id === payload.id);

            let newFavorites = [...state.favoriteRecipes];

            if (checkedRecipe) {
                newFavorites = state.favoriteRecipes.filter(favoriteRecipe => favoriteRecipe.id !== payload.id);
                payload.isFavorite = false;
            } else {
                newFavorites = [
                    ...state.favoriteRecipes, 
                    {
                        ...payload, 
                        isFavorite: true
                    }
                ];
                payload.isFavorite = true;
            }
            return {
                ...state,
                favoriteRecipes: newFavorites
            }
        default:
            throw new Error(`Unhandled type ${type} in favoriteReducer`);
    }
}

const INITIAL_STATE = {
    favoriteRecipes: getFavorites()
}

export const FavoritesProvider = ({children}) => {
    const [{ favoriteRecipes }, dispatch] = useReducer(favoriteReducer, INITIAL_STATE);

    const { updateRecipeFavoriteStatus } = useContext(RecipesContext);

   useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));
   }, [favoriteRecipes]);

   const toggleFavorites = useCallback(recipe => {
    dispatch({ type: FAVORITE_ACTION_TYPES.TOGGLE_FAVORITE_RECIPE, payload: recipe });
    updateRecipeFavoriteStatus(recipe.id, !recipe.isFavorite);
   }, [updateRecipeFavoriteStatus]);

    const value = useMemo(() => ({
        toggleFavorites,
        favoriteRecipes,
    }), [toggleFavorites, favoriteRecipes]);
    
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}