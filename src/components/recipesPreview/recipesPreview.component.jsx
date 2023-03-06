import { StyledSection } from "./recipesPreview.component.styles";
import { RecipeCard } from "../recipeCard/recipeCard.component";
import { Loading } from "../loading/loading.component";


export const RecipesPreview = ({recipesResult}) => {

    const { recipes, isLoading  } = recipesResult;
    
    return (
        <StyledSection>
            {/* Some indexes from spoonacular are duplicated therefore I am using the map index */}
            {isLoading ? <Loading /> : recipes.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />
            })}
        </StyledSection>
    );
}

