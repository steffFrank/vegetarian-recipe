import { StyledSection } from "./recipesPreview.component.styles";
import { useContext, useEffect } from "react";
import { RecipesContext } from "../../context/recipes.context";
import { RecipeCard } from "../recipeCard/recipeCard.component";
import { paths } from "../../utils/route.utils";
import { useNavigate } from "react-router-dom";

export const RecipesPreview = () => {

    const { recipesResult } = useContext(RecipesContext);
    const { recipes, isLoading, error } = recipesResult;
    
    return (
        <StyledSection>
            {/* Some indexes from spoonacular are duplicated therefore I am using the map index */}
            {isLoading ? <div>loading..</div> : recipes.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />
            })}
        </StyledSection>
    );
}

