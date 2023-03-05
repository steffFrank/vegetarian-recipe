import { FavoriteButton } from "../favoriteButton/favoriteButton.component";
import { StyledArticle, StyledImg, StyledLink, StyledDescription } from "./recipeCard.component.styles";

export const RecipeCard = ({recipe}) => {

    return (
        <>
            <StyledLink to={`${recipe.id}`}>
                <StyledArticle>
                    <StyledImg src={recipe.image} alt={recipe.title} />
                </StyledArticle>
                <StyledDescription>
                    <h2>{recipe.title}</h2>
                    <FavoriteButton recipe={recipe} />
                </StyledDescription>
            </StyledLink>
        </>
    );
}