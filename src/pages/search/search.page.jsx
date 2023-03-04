import { SearchForm } from "../../components/searchForm/searchForm.component";
import { RecipesPreview } from "../../components/recipesPreview/recipesPreview.component";
import { useContext } from "react";
import { RecipesContext } from "../../context/recipes.context";

export const Search = () => {
   const { url } = useContext(RecipesContext);
   const { recipesResult } = useContext(RecipesContext);

   return (
      <section>
         <SearchForm />
         {url && <RecipesPreview recipesResult={recipesResult} />}
      </section>
   );
}