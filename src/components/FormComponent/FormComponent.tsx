import React, {FC, useEffect, useState} from 'react';
import {IChain, IEvolutionForms} from "../../models/IEvolutionForms";
import PokemonImage from "../PokemonImageComponent/PokemonImage";
import styles from './FormComponent.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {formAction} from "../../redux/slices/FormSlice";
import FormInfoComponent from "../FormInfoComponent/FormInfoComponent";

interface IProps {
    forms: IEvolutionForms
}

const FormComponent:FC<IProps> = ({forms}) => {

    const dispatch = useAppDispatch()
    let {form} = useAppSelector(state => state.FormSlice)

    const [idForm, setIdForm] = useState<string | null>(null)

    const renderEvolutionChain = (chain: IChain) => {

        const handleButtonClick = (url: string) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            setIdForm(id);
        }


        return (
            <div className={styles.flex}>
                <div>
                    <button className={styles.btn} onClick={() => handleButtonClick(chain.species.url)}>
                        {chain.species.name}
                        <PokemonImage url={chain.species.url}/>
                    </button>
                </div>
                {chain.evolves_to.length > 0 && (
                    <div className={styles.flex}>
                        {chain.evolves_to.map((evolution, index) => (
                            <div key={index} >
                                {renderEvolutionChain(evolution)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    useEffect(() => {
        if (idForm)
        dispatch(formAction.loadForm(+idForm))
    }, [idForm, dispatch]);

    return (
        <div className={styles.flexAll}>
            { renderEvolutionChain(forms.chain)}
            <hr/>
            {idForm && <FormInfoComponent form={form} />}
        </div>
    );
};

export default FormComponent;