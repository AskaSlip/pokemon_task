import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../redux/store";
import PokemonComponent from "../components/PokemonComponent/PokemonComponent";
import {pokemonAction} from "../redux/slices/PokemonSlice";
import {useParams} from "react-router-dom";


const PokemonPage = () => {

    const { name } = useParams<{ name: string }>();

    const dispatch = useDispatch();
    const { pokemon } = useAppSelector(state => state.PokemonSlice);

    useEffect(() => {
        if (name) {
            dispatch(pokemonAction.loadPokemon(name) as any);
        }
    }, [name, dispatch]);


    return (
        <div>
            pok by id
            <PokemonComponent pokemon={pokemon}/>

        </div>
    );
};

export default PokemonPage;