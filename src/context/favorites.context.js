import { createContext, useState } from "react";

const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}
const updateFavoriteRecipes = (newFavorites) => {
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
            const newRecipe = {...recipe, isFavorite: true}
            const newFavorites = [...favoriteRecipes, newRecipe];
            setFavoriteRecipes(newFavorites);
            updateFavoriteRecipes(newFavorites);
        }
    }

    const removeFromFavorites = (recipe) => {
            const updatedFavorites = favoriteRecipes.map(favoriteRecipe => {
                if (favoriteRecipe.id === recipe.id) {
                    favoriteRecipe.isFavorite = false;
                }
                return favoriteRecipe;
            })
            const newFavorites = updatedFavorites.filter(favoriteRecipe => favoriteRecipe.id !== recipe.id);
            setFavoriteRecipes(newFavorites);
            updateFavoriteRecipes(newFavorites);
        }

    const value = {
        removeFromFavorites,
        addToFavorites,
        favoriteRecipes,
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}