import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../redux/store";
import {pokemonAction} from "../redux/slices/PokemonSlice";
import FavoritePokemonComponent from "../components/FavoritePokemonComponent/FavoritePokemonComponent";
import {IPokemonInfo} from "../models/IPokemonInfo";
import {Link} from "react-router-dom";
import styles from './FavouritePokemons.module.css'

const FavouritePokemons = () => {

    const dispatch = useAppDispatch()
    const [favoritePokemons, setFavoritePokemons] = useState<IPokemonInfo[]>([])


    useEffect(() => {
        const pokemonsArr = localStorage.getItem('favoritePokemons');
        let pokemonsIdArr: string[] = pokemonsArr ? JSON.parse(pokemonsArr) : [];

        pokemonsIdArr = Array.from(new Set(pokemonsIdArr));

        if (pokemonsIdArr.length > 0) {
                Promise.all(
                    pokemonsIdArr.map(async (pokemonId) => {
                        return await dispatch(pokemonAction.loadPokemon(pokemonId)).unwrap();
                    })
                ).then((loadedPokemons) => {
                    setFavoritePokemons(loadedPokemons);
                }).catch((error) => {
                    console.error("Failed to load some pokemons:", error);
                });}
        }, [dispatch]);

    return (
        <div className={styles.wrap}>
            {favoritePokemons.map((pokemon) => (
                <Link to={'/pokemons/'+pokemon.name} className={styles.flex}>
                    <FavoritePokemonComponent key={pokemon.id} pokemon={pokemon}/>
                </Link>
            ))}
        </div>
    );
};

export default FavouritePokemons;