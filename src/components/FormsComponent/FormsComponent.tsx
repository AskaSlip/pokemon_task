import React, {FC, useEffect, useState} from 'react';
import {PokemonServices} from "../../services/api.services";
import {IEvolutionChain} from "../../models/IEvolutionChain";
import {IEvolutionForms} from "../../models/IEvolutionForms";
import FormComponent from "../FormComponent/FormComponent";
import styles from './FormsComponent.module.css'

interface IProps {
    id: number
}

const FormsComponent: FC<IProps> = ({id}) => {

    const [evolutionChain, setEvolutionChain] = useState<IEvolutionChain | null>(null);
    useEffect(() => {
        const fetchEvolutionChain = async () => {
            if (id){
                try {
            const response = await PokemonServices.getEvolutionChain(id);
            setEvolutionChain(response);
                }catch (e){
                    console.error('not info about pokemon')
                }
            }
        };
        fetchEvolutionChain();
    }, [id]);

    const [forms, setForms] = useState<IEvolutionForms | null>(null)

    useEffect(() => {
        const fetchForms = async () => {
            if (evolutionChain?.evolution_chain.url) {
                const path = evolutionChain.evolution_chain.url.replace('https://pokeapi.co/api/v2', '');
                console.log('Fetching forms from path:', path);

                try {
                    const response = await PokemonServices.getAllForms(path);
                    setForms(response);
                } catch (error) {
                    console.error('Error fetching forms:', error);
                }
            }
        };
        fetchForms();
    }, [evolutionChain]);


    return (
        <div className={styles.wrap}>
            {forms && (
                <FormComponent forms={forms} />)
            }
        </div>
    );
}

export default FormsComponent;