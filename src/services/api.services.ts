import axios from "axios";
import {IPokemonResponse} from "../models/IPokemonResponse";
import {IPokemonInfo} from "../models/IPokemonInfo";
import {IEvolutionChain} from "../models/IEvolutionChain";
import {IEvolutionForms} from "../models/IEvolutionForms";
import {IFormInfo} from "../models/IFormInfo";

const axiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const PokemonServices = {
    getAllPokemons: async (offset: number): Promise<IPokemonResponse> => {
    const response = await axiosInstance.get<IPokemonResponse>(`/pokemon/`, {
        params: {
            limit: 20,
            offset
        }
    })
        return response.data
    },

    getImage: (id:string): string => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    },

    getPokemon: async (name:string):Promise<IPokemonInfo> => {
        const response = await axiosInstance.get<IPokemonInfo>(`/pokemon/${name}`)
        return response.data
    },

    getEvolutionChain: async (id: number): Promise<IEvolutionChain> => {
        const response = await axiosInstance.get<IEvolutionChain>(`/pokemon-species/${id}`)
        return response.data
    },

    getAllForms: async (path: string):Promise<IEvolutionForms> => {
        const response = await axiosInstance.get<IEvolutionForms>(`${path}`)
        return response.data
    },

    getFormInfo: async (id:number):Promise<IFormInfo> => {
        const response = await axiosInstance.get<IFormInfo>(`/pokemon-form/${id}`)
        return response.data
    }

}