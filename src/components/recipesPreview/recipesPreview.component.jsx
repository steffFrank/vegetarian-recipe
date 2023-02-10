import { StyledSection } from "./recipesPreview.component.styles";
import { useContext, useEffect } from "react";
import { RecipesContext } from "../../context/recipes.context";
import { RecipeCard } from "../recipeCard/recipeCard.component";
import { paths } from "../../utils/route.utils";
import { useNavigate } from "react-router-dom";

export const RecipesPreview = () => {

    const { results } = useContext(RecipesContext);
    const { recipes, isLoading, error } = results;
    const navigate = useNavigate();
    useEffect(() => {
        if (error) navigate(paths.error);
    })
    return (
        <StyledSection>
            {isLoading ? <div>loading..</div> : recipes.map(recipe => {
                return <RecipeCard key={recipe.id} recipe={recipe} />
            })}
        </StyledSection>
    )
}