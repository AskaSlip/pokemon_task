import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPokemon} from "../../models/IPokemon";
import {PokemonServices} from "../../services/api.services";
import {AxiosError} from "axios";

type PokemonsSliceType = {
    pokemons: IPokemon[],
    next: string | null,
    previous: string | null
}

const initState: PokemonsSliceType = {
    pokemons:[],
    next: null,
    previous: null
}

let loadPokemons = createAsyncThunk ('PokemonsSlice/loadPokemons', async ({ page }: { page: number }, thunkAPI) => {
try {
    const offset = (page - 1) * 20;
    const pokemons = await PokemonServices.getAllPokemons(offset);
    return thunkAPI.fulfillWithValue(pokemons)
}catch (e) {
    let error = e as AxiosError
    return thunkAPI.rejectWithValue(error?.response?.data)
}

})


export const PokemonsSlice = createSlice({
    name: 'PokemonsSlice',
    initialState: initState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPokemons.fulfilled, (state, action) => {
                const {results, next , previous} = action.payload;
                state.pokemons = results;
                state.next = next;
                state.previous = previous;
            })
})

export const pokemonsAction = {
    ...PokemonsSlice.actions,
    loadPokemons
}
