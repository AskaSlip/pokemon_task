import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {infoForSearchAction} from "../../redux/slices/InfoForSearchSlice";
import PokemonImage from "../PokemonImageComponent/PokemonImage";
import {Link} from "react-router-dom";

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
                <input
                    type="text"
                    placeholder="Search by type"
                    value={searchByType}
                    onChange={(e) => setSearchByType(e.target.value)}
                />
                <button onClick={search}>Search by type</button>
            </div>

            <h3>{pokemonType.name}</h3>
            {pokemonType.pokemon.map(pokemon => (
                <Link to={'/pokemons/'+pokemon.pokemon.name}>
                    <h4>{pokemon.pokemon.name}</h4>
                    <PokemonImage url={pokemon.pokemon.url}/>
                </Link>
            ))}
        </div>
    );
};

export default SearchByType;