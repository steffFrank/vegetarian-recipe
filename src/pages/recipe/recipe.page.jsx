import { useContext } from "react";
import { RecipesContext } from "../../context/recipes.context";

export const Recipe = () => {

    const { resultsId } = useContext(RecipesContext);
    
    const {recipe, isLoading, error } = resultsId;
    return (
        <div>{recipe.instructions}</div>
    )
}