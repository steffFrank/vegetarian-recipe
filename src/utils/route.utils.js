import { Home } from "../pages/home/home.page";
import { Favorites } from "../pages/favorites/favorites.page";
import { Search } from "../pages/search/search.page";
import { Recipe } from "../pages/recipe/recipe.page";

export const paths = {
    home : "/",
    recipe: "/search/:id",
    favorites: "/favorites",
    search: "/search",
    error: "/error"
}

export const links = [
    {
        path: paths.search, 
        name: "search"
    },
    {
        path: paths.favorites,
        name: "favorites"
    },
]

export const routes = [
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
    },
  ]