import { createContext, useEffect, useState, useContext } from "react";
import { RecipesContext } from "./recipes.context";


const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export const FavoritesContext = createContext({
    toggleFavorites: () => {},
    favoriteRecipes: []
});

export const FavoritesProvider = ({children}) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState(getFavorites());
    const { updateRecipeFavoriteStatus } = useContext(RecipesContext);

   useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));
   }, [favoriteRecipes]);

   const toggleFavorites = (recipe) => {
    const checkRecipe = favoriteRecipes.find(favoriteRecipe => favoriteRecipe.id === recipe.id);

    if (checkRecipe) {
        const removedFavorite = favoriteRecipes.filter(favoriteRecipe => favoriteRecipe.id !== recipe.id);
        recipe.isFavorite = false;
        setFavoriteRecipes(removedFavorite);
        updateRecipeFavoriteStatus(recipe.id, false);
    } else {
        const newFavorites = [...favoriteRecipes, {...recipe, isFavorite: true}];
        recipe.isFavorite = true;
        setFavoriteRecipes(newFavorites);
        updateRecipeFavoriteStatus(recipe.id, true);
    }
   }

    const value = {
        toggleFavorites,
        favoriteRecipes,
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}