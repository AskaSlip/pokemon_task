import React, {FC} from 'react';
import {IPokemon} from "../../models/IPokemon";
import PokemonImage from "../PokemonImageComponent/PokemonImage";
import styles from './PokemonsComponent.module.css'

interface IProps {
    pokemons: IPokemon []
}

const PokemonsComponent: FC <IProps> = ({pokemons }) => {



    return (
        <div className={styles.wrap}>
                {pokemons.map((pokemon,index) =>
                    (<div key={index} className={styles.pokemonBlock}>
                        {pokemon.name}
                        <PokemonImage url={pokemon.url}/>
                    </div>))}

        </div>
    );
};

export default PokemonsComponent;