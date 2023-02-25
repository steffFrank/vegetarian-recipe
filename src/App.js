import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/error/error.page";
import { Navigation } from "./pages/navigation/navigation.page";
import { GlobalStyle } from "./App.styles";
import { RecipesProvider } from "./context/recipes.context";
import { routes } from "./utils/route.utils";
import { FavoritesProvider } from "./context/favorites.context";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      errorElement:<Error />,
      children: [
        {
          errorElement: <Error />,
          children: routes
        }
      ]
    }
  ]);

  return (
    <RecipesProvider>
      <FavoritesProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </FavoritesProvider>
    </RecipesProvider>    
  )
}

export default App;
