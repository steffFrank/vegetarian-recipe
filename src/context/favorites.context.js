import { createContext, useState } from "react";

const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}
const updateFavorites = (newFavorites) => {
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
}

export const FavoritesContext = createContext({
    toggleFavorites: () => {},
    favoriteRecipes: getFavorites()
});


export const FavoritesProvider = ({children}) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState(getFavorites());

    const addToFavorites = (recipe) => {
        const checkRecipe =  favoriteRecipes.find(favoriteRecipe => favoriteRecipe.id === recipe.id);
        if (checkRecipe) {
            return;
        } else {
            const newFavorites = [...favoriteRecipes, recipe];
            setFavoriteRecipes(newFavorites);
            updateFavorites(newFavorites);
        }
    }

    const removeFromFavorites = (recipe) => {
            const newFavorites = favoriteRecipes.filter(favoriteRecipe => favoriteRecipe.id !== recipe.id);
            setFavoriteRecipes(newFavorites);
            updateFavorites(newFavorites);
        }

    const value = {
        removeFromFavorites,
        addToFavorites,
        favoriteRecipes
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}