import { useContext } from "react"
import { FavoritesContext } from "../../context/favorites.context";

export const FavoriteButton = ({recipe}) => {

    const { toggleFavorites } = useContext(FavoritesContext);
    
    const handleButtonClick = () => {
        toggleFavorites(recipe);
    }

    return (
        <button onClick={handleButtonClick}>{recipe.isFavorite ? "remove from favorites" : "add To Favorites"}</button>
    )
}