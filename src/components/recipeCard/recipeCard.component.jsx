import { FavoriteButton } from "../favoriteButton/favoriteButton.component";
import { StyledArticle, StyledTitle, StyledImg, StyledLink } from "./recipeCard.component.styles";

export const RecipeCard = ({recipe}) => {

    return (
        <>
            <FavoriteButton recipe={recipe} />
            <StyledLink to={`${recipe.id}`}>
                <StyledTitle>{recipe.title}</StyledTitle>
                <StyledArticle>
                    <StyledImg src={recipe.image} alt={recipe.title} />
                </StyledArticle>
            </StyledLink>
        </>
        
    );
}