import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Favorites } from "./pages/favorites/favorites.page";
import { Home } from "./pages/home/home.page";
import { Search } from "./pages/search/search.page";
import { paths } from "./utils/route.utils";
import { Error } from "./pages/error/error.page";
import { Navigation } from "./pages/navigation/navigation.page";
import { GlobalStyle } from "./App.styles";
import { RecipesProvider } from "./context/recipes.context";
import { Recipe } from "./pages/recipe/recipe.page";

const routes = [
  {
    path: paths.home,
    element: <Home />
  },
  {
    path: paths.favorites,
    element: <Favorites />
  },
  {
    path: paths.search,
    element: <Search />
  },
  {
    path: paths.recipe,
    element: <Recipe />
  }
]

const App = () => {

  const router = createBrowserRouter([
    {
      path: paths.home,
      element: <Navigation />,
      errorElement:<Error />,
      children: routes
    }
  ]);

  return (
    <RecipesProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecipesProvider>    
  )
}

export default App;
