import { useState, useContext, useEffect } from "react"
import { FavoritesContext } from "../../context/favorites.context";

export const FavoriteButton = ({recipe}) => {

    const { addToFavorites, removeFromFavorites, favoriteRecipes } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);

    useEffect(() => {
        const checkRecipe = favoriteRecipes.find(favoriteRecipe => favoriteRecipe.id === recipe.id);
        setIsFavorite(checkRecipe ? true : false);
    }, [favoriteRecipes, recipe.id])

    const handleButtonClick = () => {
        if (isFavorite) {
            removeFromFavorites(recipe);
            setIsFavorite(false);
        } else {
            addToFavorites(recipe);
            setIsFavorite(true);
        }
    }
    return (
        <button onClick={handleButtonClick}>{isFavorite ? "remove from favorites" : "add To Favorites"}</button>
    )
}