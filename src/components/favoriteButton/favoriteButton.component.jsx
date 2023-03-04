import { useContext } from "react"
import { FavoritesContext } from "../../context/favorites.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { StyledFavoriteButton } from "./favoriteButton.component.styles";
export const FavoriteButton = ({recipe}) => {

    const { toggleFavorites } = useContext(FavoritesContext);
   
    const handleButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorites(recipe);
    }
    
    return (
            <StyledFavoriteButton onClick={handleButtonClick} isFavorite={recipe.isFavorite}>
                <FontAwesomeIcon icon={faHeart} />
                <span>{recipe.isFavorite ? "Remove From Favorite" : "Add To Favorite"}</span>
            </StyledFavoriteButton>
    )
}