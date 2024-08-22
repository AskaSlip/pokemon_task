import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PokemonsPage from "../pages/PokemonsPage";
import PokemonPage from "../pages/PokemonPage";
import SearchPage from "../pages/SearchPage";
import FavouritePokemons from "../pages/FavouritePokemons";
import HomeComponent from "../components/Home/HomeComponent";

export const index = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>error 404!!!</h1>,
        children: [
            {index: true, element: <HomeComponent/>},
            {path: 'pokemons', element: <PokemonsPage/>},
            {path: 'pokemons/:id', element: <PokemonPage/>},
            {path: 'search', element: <SearchPage/>},
            {path: 'favourite', element: <FavouritePokemons/>}
        ]

    }
])