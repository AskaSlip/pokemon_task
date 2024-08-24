import React, {FC} from 'react';
import {IPokemonInfo} from "../../models/IPokemonInfo";
import {PokemonServices} from "../../services/api.services";

interface IProps {
    pokemon: IPokemonInfo
}

const FavoritePokemonComponent: FC<IProps> = ({pokemon}) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={PokemonServices.getImage(pokemon.id.toString())} alt="pokemon"/>
        </div>
    );
};

export default FavoritePokemonComponent;