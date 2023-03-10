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
                <FontAwesomeIcon test-dataid="icon" icon={faHeart} />
                <div data-testid="textButton">{recipe.isFavorite ? "Remove From Favorite" : "Add To Favorite"}</div>
            </StyledFavoriteButton>
    )
}