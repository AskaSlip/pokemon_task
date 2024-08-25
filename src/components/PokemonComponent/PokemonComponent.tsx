import React, {FC, useEffect, useState} from 'react';
import {IPokemonInfo} from "../../models/IPokemonInfo";
import {PokemonServices} from "../../services/api.services";
import FormsComponent from "../FormsComponent/FormsComponent";
import styles from './PokemonComponent.module.css'

interface IProps {
    pokemon: IPokemonInfo
}

const initializeLocalStorage = () => {
    const existingFavorites = localStorage.getItem('favoritePokemons');
    if (!existingFavorites) {
        localStorage.setItem('favoritePokemons', JSON.stringify([]));
    }
};


const PokemonComponent:FC<IProps> = ({pokemon}) => {

    useEffect(() => {
        initializeLocalStorage()
    }, []);

    const handleButtonAddToFavourite = () => {
        const existingFavorites = JSON.parse(localStorage.getItem('favoritePokemons') || '[]');
        existingFavorites.push(pokemon.id);
        localStorage.setItem('favoritePokemons', JSON.stringify(existingFavorites));
    }

    let [img, setImg] = useState<string | null>(null)

    useEffect(() => {
        let newImg: string;
        if (pokemon.id < 10) {
            newImg = PokemonServices.getExtraImage('00' + pokemon.id);
        }else if(pokemon.id < 100)
        {
            newImg = PokemonServices.getExtraImage('0' + pokemon.id);
        }
        else {
            newImg = PokemonServices.getExtraImage(pokemon.id.toString());
        }
        setImg(newImg);
    }, [pokemon.id]);


    return (
        <div className={styles.totalWrap}>
            <button className={styles.btn} onClick={handleButtonAddToFavourite}>
                Add to favorite Pokemons
            </button>

            <div className={styles.wrapPokemon}>
                <div className={styles.title}>
                    {img && <img src={img} alt={pokemon.name}/>}
                    <h3>{pokemon.name}</h3>
                </div>
                <div className={styles.info}>
                    <ul>
                        <h3 className={styles.h}>Stats</h3>
                        {pokemon.stats.map((stat,) => (
                            <li className={styles.list}>
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <h3 className={styles.h}>Abilities</h3>
                        {pokemon.abilities.map((abil) => (
                            <li className={styles.list}>
                                {abil.ability.name}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <h3 className={styles.h}>Types</h3>
                        {pokemon.types.map((type) => (
                            <li className={styles.list}>
                                {type.type.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <FormsComponent id={pokemon.id}/></div>
        </div>
    );
};

export default PokemonComponent;