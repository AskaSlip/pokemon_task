import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PokemonServices} from "../../services/api.services";
import {AxiosError} from "axios";
import {ISearch} from "../../models/ISearch";

type InfoForSearchSliceType = {
    pokemonType: ISearch
    pokemonAbility: ISearch
}

const initState: InfoForSearchSliceType = {
    pokemonType: {
        name: '',
        pokemon: []
    },
    pokemonAbility:{
        name: '',
        pokemon: []
    },
}

const loadByType = createAsyncThunk(
    'InfoForSearchSlice/loadByType',
    async (type: string, thunkAPI) => {
        try {
            const response = await PokemonServices.searchByType(type);
            console.log('Response Data:', response);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

const loadByAbility = createAsyncThunk(
    'InfoForSearchSlice/loadByAbility',
    async (ability: string, thunkAPI) => {
        try {
            const response = await PokemonServices.searchByAbilities(ability);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
);

export const InfoForSearchSlice = createSlice({
    name: 'InfoForSearchSlice',
    initialState: initState,
    reducers:{
        resetSearch: state => {
            state.pokemonType = initState.pokemonType;
            state.pokemonAbility = initState.pokemonAbility
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadByType.fulfilled, (state, action) => {
                state.pokemonType = action.payload;
            })
            .addCase(loadByAbility.fulfilled, (state, action) => {
                state.pokemonAbility = action.payload;
            }),
})

export const infoForSearchAction = {
    ...InfoForSearchSlice.actions,
    loadByAbility,
    loadByType
}
