import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {infoForSearchAction} from "../../redux/slices/InfoForSearchSlice";
import {Link} from "react-router-dom";
import PokemonImage from "../PokemonImageComponent/PokemonImage";
import styles from './SearchComponent.module.css'


const SearchByAbility = () => {
    const dispatch = useAppDispatch()
    let {pokemonAbility} = useAppSelector(state => state.InfoForSearch)
    const [searchByAbility, setSearchByAbility] = useState<string>('')

    const search = () => {
        if (searchByAbility ) dispatch(infoForSearchAction.loadByAbility(searchByAbility.toLowerCase()))
    }

    console.log('pokemonTypes:', pokemonAbility);

    return (
        <div>
            <div>
                <input className={styles.input}
                    type="text"
                    placeholder="Search by ability"
                    value={searchByAbility}
                    onChange={(e) => setSearchByAbility(e.target.value)}
                />
                <button className={styles.btn}  onClick={search}>Search by ability</button>
            </div>
            <div className={styles.typeWrap}>
                {pokemonAbility.pokemon.map(pokemon => (
                <Link className={styles.link} to={'/pokemons/' + pokemon.pokemon.name}>
                    <div className={styles.pokemon}>
                        <h4>{pokemon.pokemon.name}</h4>
                        <PokemonImage url={pokemon.pokemon.url}/>
                    </div>
                </Link>
            ))}</div>
        </div>
    );
};

export default SearchByAbility;