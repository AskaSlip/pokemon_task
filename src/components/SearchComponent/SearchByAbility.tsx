import React, {FC} from 'react';
import {Link} from "react-router-dom";
import PokemonImage from "../PokemonImageComponent/PokemonImage";
import styles from './SearchComponent.module.css'
import {ISearch} from "../../models/ISearch";

interface IProps {
    pokemonAbility: ISearch
}

const SearchByAbility:FC <IProps> = ({pokemonAbility}) => {

    return (
        <div>
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