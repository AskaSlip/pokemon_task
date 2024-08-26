import React, {FC} from 'react';
import PokemonImage from "../PokemonImageComponent/PokemonImage";
import {Link} from "react-router-dom";
import styles from './SearchComponent.module.css'
import {ISearch} from "../../models/ISearch";

interface IProps {
    pokemonType: ISearch
}

const SearchByType: FC <IProps> = ({pokemonType}) => {

    return (
        <div>

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