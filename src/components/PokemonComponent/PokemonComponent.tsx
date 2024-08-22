import React, {FC} from 'react';
import {IPokemonInfo} from "../../models/IPokemonInfo";
import {PokemonServices} from "../../services/api.services";
import FormsComponent from "../FormsComponent/FormsComponent";

interface IProps {
    pokemon: IPokemonInfo
}

const PokemonComponent:FC<IProps> = ({pokemon}) => {

    const image = PokemonServices.getImage(pokemon.id.toString())

    return (
        <div>
            <h1>{pokemon.id}</h1>
            <hr/>
            <img src={image} alt="pokemon"/>
            <hr/>
            <h3>{pokemon.name}</h3>
            <hr/>
            <div>
                <ul>
                    {pokemon.stats.map((stat,) => (
                        <li >
                            {stat.stat.name}: {stat.base_stat}
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
            <ul>
                {pokemon.abilities.map((abil) => (
                    <li >
                        Ability: {abil.ability.name}
                    </li>
                ))}
            </ul>
            <hr/>
            <ul>
                {pokemon.types.map((type) => (
                    <li >
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