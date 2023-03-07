import { StyledSection } from "./recipesPreview.component.styles";
import { RecipeCard } from "../recipeCard/recipeCard.component";
import { Loading } from "../loading/loading.component";
import { StyledEmptyMessage } from "../reusable/reusable.styles";

export const RecipesPreview = ({recipesResult}) => {

    const { recipes, isLoading, error  } = recipesResult;
    if (error || recipes.length === 0) {
       return ( 
        <StyledEmptyMessage>Sorry! no result was found for this ingredient</StyledEmptyMessage> 
       )
    }
    return (
        <StyledSection>
            {/* Some indexes from spoonacular are duplicated therefore I am using the map index */}
            {isLoading ? <Loading /> : recipes.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />
            })}
        </StyledSection>
    );
}

