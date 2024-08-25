import React, {useEffect} from 'react';
import SearchByName from "../components/SearchComponent/SearchByName";
import SearchByType from "../components/SearchComponent/SearchByType";
import SearchByAbility from "../components/SearchComponent/SearchByAbility";
import {useAppDispatch} from "../redux/store";
import {pokemonAction} from "../redux/slices/PokemonSlice";
import {infoForSearchAction} from "../redux/slices/InfoForSearchSlice";

const SearchPage = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(pokemonAction.resetPokemon())
        dispatch(infoForSearchAction.resetSearch())
    }, [dispatch]);

    return (
        <div>
            here search
            <SearchByName/>
            <SearchByType/>
            <SearchByAbility/>
        </div>
    );
};

export default SearchPage;