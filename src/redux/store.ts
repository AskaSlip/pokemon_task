import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {PokemonsSlice} from "./slices/PokemonsSlice";
import {PokemonSlice} from "./slices/PokemonSlice";
import {FormSlice} from "./slices/FormSlice";

export const store = configureStore({
    reducer: {
        PokemonsSlice: PokemonsSlice.reducer,
        PokemonSlice: PokemonSlice.reducer,
        FormSlice: FormSlice.reducer
    }
})



export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();