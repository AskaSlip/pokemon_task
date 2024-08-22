import React, {FC} from 'react';
import {IFormInfo} from "../../models/IFormInfo";

interface IProps {
    form: IFormInfo
}

const FormInfoComponent:FC<IProps> = ({form}) => {
    return (
        <div>
            <h6>{form.name}</h6>
            {form.is_default}
            {form.is_battle_only}
            {form.is_mega}
            version: {form.version_group.name}
            <div>
                <img src={form.sprites.front_shiny} alt="front"/>
                <img src={form.sprites.back_shiny} alt="back"/>
            </div>
        </div>
    );
};

export default FormInfoComponent;