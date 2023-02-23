import { StyledArticle, StyledTitle, StyledImg, StyledLink } from "./recipeCard.component.styles";

export const RecipeCard = ({recipe}) => {

    return (
        <StyledLink to={`${recipe.id}`}>
            <StyledTitle>{recipe.title}</StyledTitle>
            <button>add to Favorites</button>
            <StyledArticle>
                <StyledImg src={recipe.image} alt={recipe.title} />
            </StyledArticle>
        </StyledLink>
    );
}