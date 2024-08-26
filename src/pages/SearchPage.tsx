import React, {useEffect, useState} from 'react';
import SearchByType from "../components/SearchComponent/SearchByType";
import SearchByAbility from "../components/SearchComponent/SearchByAbility";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {pokemonAction} from "../redux/slices/PokemonSlice";
import {infoForSearchAction} from "../redux/slices/InfoForSearchSlice";
import styles from './SearchPage.module.css'
import PokemonComponent from "../components/PokemonComponent/PokemonComponent";

const SearchPage = () => {

    const dispatch = useAppDispatch()

    let {pokemon} = useAppSelector(state => state.PokemonSlice)
    let {pokemonType, pokemonAbility} = useAppSelector(state => state.InfoForSearch)

    const [SearchByName, setSearchByName] = useState<string>('')
    const [searchByType, setSearchByType] = useState<string>('')
    const [searchByAbility, setSearchByAbility] = useState<string>('')
    const [shownSearch, setShownSearch] = useState<string>('');


    const searchName = () => {
        if (SearchByName) {
            dispatch(pokemonAction.loadPokemon(SearchByName.toLowerCase()))
            setShownSearch('name')
        }
    }

    const searchType = () => {
        if (searchByType ) {
            dispatch(infoForSearchAction.loadByType(searchByType.toLowerCase()))
            setShownSearch('type')
        }
    }

    const searchAbility = () => {
        if (searchByAbility ) {
            dispatch(infoForSearchAction.loadByAbility(searchByAbility.toLowerCase()))
            setShownSearch('ability')
        }
    }


    useEffect(() => {
        dispatch(pokemonAction.resetPokemon())
        dispatch(infoForSearchAction.resetSearch())
    }, [dispatch]);

    return (
        <div>
            <div>
                <input className={styles.input}
                       type="text"
                       placeholder="Search by name"
                       value={SearchByName}
                       onChange={(e) => setSearchByName(e.target.value)}
                />
                <button className={styles.btn} onClick={searchName}>Search by name</button>
            </div>
            <div>
                <input className={styles.input}
                       type="text"
                       placeholder="Search by type"
                       value={searchByType}
                       onChange={(e) => setSearchByType(e.target.value)}
                />
                <button className={styles.btn} onClick={searchType}>Search by type</button>
            </div>
            <div>
                <input className={styles.input}
                       type="text"
                       placeholder="Search by ability"
                       value={searchByAbility}
                       onChange={(e) => setSearchByAbility(e.target.value)}
                />
                <button className={styles.btn} onClick={searchAbility}>Search by ability</button>
            </div>

            {shownSearch === 'name' && pokemon.id && <PokemonComponent pokemon={pokemon} />}
            {shownSearch === 'type' && pokemonType.pokemon.length > 0 && <SearchByType pokemonType={pokemonType} />}
            {shownSearch === 'ability' && pokemonAbility.pokemon.length > 0 && <SearchByAbility pokemonAbility={pokemonAbility} />}


        </div>
    );
};

export default SearchPage;