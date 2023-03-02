import { createContext, useEffect, useState } from "react";

const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export const FavoritesContext = createContext({
    toggleFavorites: () => {},
    favoriteRecipes: []
});

export const FavoritesProvider = ({children}) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState(getFavorites());

   useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));
   }, [favoriteRecipes]);

   const toggleFavorites = (recipe) => {
    const checkRecipe = favoriteRecipes.find(favoriteRecipe => favoriteRecipe.id === recipe.id);

    if (checkRecipe) {
        const removedFavorite = favoriteRecipes.filter(favoriteRecipe => favoriteRecipe.id !== recipe.id);
        recipe.isFavorite = false;
        setFavoriteRecipes(removedFavorite);
    } else {
        const newFavorites = [...favoriteRecipes, recipe];
        recipe.isFavorite = true;
        setFavoriteRecipes(newFavorites);
    }
   }

    const value = {
        toggleFavorites,
        favoriteRecipes,
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}