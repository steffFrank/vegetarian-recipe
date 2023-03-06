import { useContext } from "react";
import { StyledSection } from "../../components/recipesPreview/recipesPreview.component.styles";
import { FavoritesContext } from "../../context/favorites.context";
import { RecipeCard } from "../../components/recipeCard/recipeCard.component";
import { StyledTitle } from "./favorites.styles";
import { StyledEmptyMessage } from "../../components/reusable/reusable.styles";

export const Favorites = () => {
    const { favoriteRecipes } = useContext(FavoritesContext);
    
    return (
        favoriteRecipes.length === 0 ? <StyledEmptyMessage>Empty list!</StyledEmptyMessage> : 
        <>
            <StyledTitle>Your favorite recipes</StyledTitle>
            <StyledSection>
                {/* Some ids from spoonacular are duplicated therefore I am using the map index */}
                {favoriteRecipes.map((recipe, index) => {
                    return <RecipeCard key={index} recipe={recipe}/>
                })}
            </StyledSection>
        </>
    );
}