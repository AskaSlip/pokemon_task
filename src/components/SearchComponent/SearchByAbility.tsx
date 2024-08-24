import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {infoForSearchAction} from "../../redux/slices/InfoForSearchSlice";
import {Link} from "react-router-dom";
import PokemonImage from "../PokemonImageComponent/PokemonImage";

const SearchByAbility = () => {
    const dispatch = useAppDispatch()
    let {pokemonAbility} = useAppSelector(state => state.InfoForSearch)
    const [searchByAbility, setSearchByAbility] = useState<string>('')

    const search = () => {
        if (searchByAbility ) dispatch(infoForSearchAction.loadByAbility(searchByAbility.toLowerCase()))
    }

    console.log('pokemonTypes:', pokemonAbility);

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by type"
                    value={searchByAbility}
                    onChange={(e) => setSearchByAbility(e.target.value)}
                />
                <button onClick={search}>Search by ability</button>
            </div>
            <hr/>
            <h3>{pokemonAbility.name}</h3>
            {pokemonAbility.pokemon.map(pokemon => (
                <Link to={'/pokemons/'+pokemon.pokemon.name}>
                    <h4>{pokemon.pokemon.name}</h4>
                    <PokemonImage url={pokemon.pokemon.url}/>
                </Link>
            ))}
        </div>
    );
};

export default SearchByAbility;