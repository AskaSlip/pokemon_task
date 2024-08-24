import React, {FC, useEffect} from 'react';
import {IPokemonInfo} from "../../models/IPokemonInfo";
import {PokemonServices} from "../../services/api.services";
import FormsComponent from "../FormsComponent/FormsComponent";

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

    const image = PokemonServices.getImage(pokemon.id.toString())

    return (
        <div>
            <button onClick={handleButtonAddToFavourite}>
                Add to favorite Pokemons
            </button>
            <h1>{pokemon.id}</h1>
            <hr/>
            <img src={image} alt="pokemon"/>
            <hr/>
            <h3>{pokemon.name}</h3>
            <hr/>
            <div key={pokemon.id}>
                <ul> Stats
                    {pokemon.stats.map((stat,) => (
                        <li>
                            {stat.stat.name}: {stat.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
            <ul> Abilities
                {pokemon.abilities.map((abil) => (
                    <li>
                        Ability: {abil.ability.name}
                    </li>
                ))}
            </ul>
            <hr/>
            <ul> Types
                {pokemon.types.map((type) => (
                    <li>
                        {type.type.name}
                    </li>
                ))}
            </ul>
            <hr/>
            <FormsComponent id={pokemon.id}/>
        </div>
    );
};

export default PokemonComponent;