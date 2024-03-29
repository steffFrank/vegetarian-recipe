import { StyledSection } from "./recipesPreview.component.styles";
import { RecipeCard } from "../recipeCard/recipeCard.component";
import { Loading } from "../loading/loading.component";
import { StyledEmptyMessage } from "../reusable/reusable.styles";
import { useRef, useEffect, useContext } from "react";
import { RecipesContext } from "../../context/recipes.context";
export const RecipesPreview = ({recipesResult}) => {

    const { recipes, isLoading, error  } = recipesResult;

    const sectionRef = useRef(null);
   const { url } = useContext(RecipesContext);
    
    // Scroll to the top of the recipesPreview container at each re-render
    useEffect(() => {
            sectionRef.current.scrollTo({top: 0, behavior: "smooth"});
    }, [url]);

    if (error || recipes.length === 0) {
       return ( 
        <StyledEmptyMessage>Sorry! No result was found for this ingredient</StyledEmptyMessage> 
       )
    }
    return (
        <StyledSection ref={sectionRef}>
            {/* Some indexes from spoonacular are duplicated therefore I am using the map index */}
            {isLoading ? <Loading /> : recipes.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />
            })}
        </StyledSection>
    );
}

