import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {pokemonAction} from "../../redux/slices/PokemonSlice";
import PokemonComponent from "../PokemonComponent/PokemonComponent";
import styles from './SearchComponent.module.css'

const SearchByName: FC = () => {

    const dispatch = useAppDispatch()
   let {pokemon} = useAppSelector(state => state.PokemonSlice)
    const [SearchByName, setSearchByName] = useState<string>('')

    const search = () => {
        if (SearchByName) dispatch(pokemonAction.loadPokemon(SearchByName.toLowerCase()))
    }

    useEffect(() => {
        return () => {
            dispatch(pokemonAction.resetPokemon());
        };
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
                <button className={styles.btn} onClick={search}>Search by name</button>
            </div>
            {pokemon.id ? <PokemonComponent pokemon={pokemon}/> : <></>}
        </div>
    );
};

export default SearchByName;