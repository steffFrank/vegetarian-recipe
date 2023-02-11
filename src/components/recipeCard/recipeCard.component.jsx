import { useContext } from "react";
import { RecipesContext } from "../../context/recipes.context";
import { StyledArticle, StyledTitle, StyledImg, StyledLink } from "./recipeCard.component.styles";

export const RecipeCard = ({recipe}) => {
    const { getDataById } = useContext(RecipesContext);

    const handleCardClick = () => {
        getDataById(recipe.id);
    }
    
    return (
        <StyledLink onClick={handleCardClick} to={`${recipe.id}`}>
            <StyledTitle>{recipe.title}</StyledTitle>
            <button>add to Favorites</button>
            <StyledArticle>
                <StyledImg src={recipe.image} alt={recipe.title} />
            </StyledArticle>
        </StyledLink>
    );
}