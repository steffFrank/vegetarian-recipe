import { useContext, useState } from "react";
import { FavoritesContext } from "../../context/favorites.context";
import { StyledArticle, StyledTitle, StyledImg, StyledLink } from "./recipeCard.component.styles";

export const RecipeCard = ({recipe, isButton}) => {
    const [isFavorite, setIsFavorite ] = useState(false);
    const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

    const handleButtonClick = () => {
        isFavorite ? removeFromFavorites(recipe) : addToFavorites(recipe)
        setIsFavorite(prevState => !prevState);
    }

    return (
        <>
            {isButton && <button onClick={handleButtonClick}>{isFavorite ? "remove from favorites" : "add to Favorites" }</button>}
            <StyledLink to={`${recipe.id}`}>
            <StyledTitle>{recipe.title}</StyledTitle>
            
            <StyledArticle>
                <StyledImg src={recipe.image} alt={recipe.title} />
            </StyledArticle>
            </StyledLink>
        </>
        
    );
}