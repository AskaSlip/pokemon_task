import React, {FC} from 'react';
import {PokemonServices} from "../../services/api.services";

interface IProps {
    url: string
}

const PokemonImage: FC<IProps> = ({url}) => {

    const urlParts = url.split('/');
    const id = urlParts[urlParts.length - 2];

    const pokemonImage = PokemonServices.getImage(id)

    return (
        <div>
            <img src={pokemonImage} alt="pokemon"/>
        </div>
    );
};

export default PokemonImage;