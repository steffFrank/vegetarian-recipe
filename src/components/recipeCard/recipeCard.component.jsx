import { FavoriteButton } from "../favoriteButton/favoriteButton.component";
import { StyledArticle, StyledTitle, StyledImg, StyledLink, StyledButton } from "./recipeCard.component.styles";

export const RecipeCard = ({recipe}) => {

    return (
        <>
            <StyledLink to={`${recipe.id}`}>
                <StyledTitle>{recipe.title}</StyledTitle>
                <StyledArticle>
                    <StyledImg src={recipe.image} alt={recipe.title} />
                </StyledArticle>
            <StyledButton><FavoriteButton recipe={recipe} /></StyledButton>
            </StyledLink>
        </>
    );
}