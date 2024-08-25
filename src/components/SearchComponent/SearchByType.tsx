import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {infoForSearchAction} from "../../redux/slices/InfoForSearchSlice";
import PokemonImage from "../PokemonImageComponent/PokemonImage";
import {Link} from "react-router-dom";
import styles from './SearchComponent.module.css'


const SearchByType = () => {


    const dispatch = useAppDispatch()
    let {pokemonType} = useAppSelector(state => state.InfoForSearch)
    const [searchByType, setSearchByType] = useState<string>('')

    const search = () => {
        if (searchByType ) dispatch(infoForSearchAction.loadByType(searchByType.toLowerCase()))
    }

    console.log('pokemonTypes:', pokemonType);

    return (
        <div>
            <div>
                <input className={styles.input}
                    type="text"
                    placeholder="Search by type"
                    value={searchByType}
                    onChange={(e) => setSearchByType(e.target.value)}
                />
                <button className={styles.btn}  onClick={search}>Search by type</button>
            </div>
            <div className={styles.typeWrap}>
                {pokemonType.pokemon.map(pokemon => (
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

export default SearchByType;