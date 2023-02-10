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