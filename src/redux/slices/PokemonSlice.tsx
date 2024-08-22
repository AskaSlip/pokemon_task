import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPokemon} from "../../models/IPokemon";
import {PokemonServices} from "../../services/api.services";
import {AxiosError} from "axios";

type PokemonSliceType = {
    pokemons: IPokemon[],
    next: string | null,
    previous: string | null
}

const initState: PokemonSliceType = {
    pokemons:[],
    next: null,
    previous: null
}

let loadPokemon = createAsyncThunk ('PokemonSlice/loadPokemon', async ({ page }: { page: number }, thunkAPI) => {
try {
    const offset = (page - 1) * 20;
    const pokemons = await PokemonServices.getAllPokemons(offset);
    return thunkAPI.fulfillWithValue(pokemons)
}catch (e) {
    let error = e as AxiosError
    return thunkAPI.rejectWithValue(error?.response?.data)
}

})


export const PokemonSlice = createSlice({
    name: 'PokemonSlice',
    initialState: initState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPokemon.fulfilled, (state, action) => {
                const {results, next , previous} = action.payload;
                state.pokemons = results;
                state.next = next;
                state.previous = previous;
            })
})

export const pokemonAction = {
    ...PokemonSlice.actions,
    loadPokemon
}
