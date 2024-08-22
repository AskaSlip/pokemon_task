import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {pokemonsAction} from "../redux/slices/PokemonsSlice";
import PokemonsComponent from "../components/PokemonsComponent/PokemonsComponent";
import Pagination from "../components/PaginationComponent/Pagination";
import {useSearchParams} from "react-router-dom";

const PokemonsPage = () => {

    const [query] = useSearchParams({page: '1'})

    let dispatch = useAppDispatch();
    let {pokemons, previous, next} = useAppSelector(state => state.PokemonsSlice)

    useEffect(() => {
        const currentPage = query.get('page');
        const page = currentPage ? Number(currentPage) : 1;

        dispatch(pokemonsAction.loadPokemons({ page }))
    }, [query.get('page'), dispatch]);


    return (
        <div>
            <PokemonsComponent pokemons={pokemons}/>
            <hr/>
            <Pagination prev={previous} next={next}/>
        </div>
    );
};

export default PokemonsPage;