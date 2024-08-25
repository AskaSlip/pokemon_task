import React, {FC} from 'react';
import {IFormInfo} from "../../models/IFormInfo";
import styles from './FormInfoComponent.module.css'

interface IProps {
    form: IFormInfo
}

const FormInfoComponent:FC<IProps> = ({form}) => {
    return (
        <div>
            <h3 className={styles.title}>Form name: {form.name}</h3>
            <div className={styles.text}>Default form: {(form.is_default).toString()}</div>
            <div className={styles.text}>Only battle: {(form.is_battle_only).toString()}</div>
            <div className={styles.text}>Is mega form: {(form.is_mega).toString()}</div>
            <div className={styles.text}>version: {form.version_group.name}</div>
            <div className={styles.pics}>
                <img className={styles.pic} src={form.sprites.front_shiny} alt="front"/>
                <img className={styles.pic} src={form.sprites.back_shiny} alt="back"/>
            </div>
        </div>
    );
};

export default FormInfoComponent;