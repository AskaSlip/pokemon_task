import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPokemonInfo} from "../../models/IPokemonInfo";
import {PokemonServices} from "../../services/api.services";
import {AxiosError} from "axios";

type PokemonSlice = {
    pokemon: IPokemonInfo
}

const initPokemonSlice: PokemonSlice = {
    pokemon: {
        id: 0,
        name: '',
        abilities: [],
        stats: [],
        types: []
    }
}

const loadPokemon = createAsyncThunk ('PokemonSlice/loadPokemon', async (name:string, thunkAPI) => {
    try {
        const pokemon = await PokemonServices.getPokemon(name)
        return thunkAPI.fulfillWithValue(pokemon)
    }catch (e){
        const error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})



export const PokemonSlice = createSlice({
    name: 'PokemonSlice',
    initialState: initPokemonSlice,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPokemon.fulfilled, (state, action) => {
                state.pokemon = action.payload
            })
})

export const pokemonAction = {
    ...PokemonSlice,
    loadPokemon
}