import React, {FC} from 'react';
import {IChain, IEvolutionForms} from "../../models/IEvolutionForms";
import PokemonImage from "../PokemonImageComponent/PokemonImage";

interface IProps {
    forms: IEvolutionForms
}

const FormComponent:FC<IProps> = ({forms}) => {

    const renderEvolutionChain = (chain: IChain) => {

        return (
            <div style={{ marginLeft: '20px' }}> (styles for check)
                <div>
                    {chain.species.name}
                    <PokemonImage url={chain.species.url}/>
                </div>
                {chain.evolves_to.length > 0 && (
                    <div>
                        {chain.evolves_to.map((evolution, index) => (
                            <div key={index}>
                                {renderEvolutionChain(evolution)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    //todo make click element on form and open info about this form

    return (
        <div>
            {renderEvolutionChain(forms.chain)}
        </div>
    );
};

export default FormComponent;