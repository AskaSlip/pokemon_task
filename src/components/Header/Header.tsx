import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.wrap}>

                <div><Link className={styles.link} to={'/'}>Home page</Link></div>
                <div><Link className={styles.link} to={'/pokemons'}>All Pokemons</Link></div>
                <div><Link className={styles.link} to={'/search'}>Search Pokemon</Link></div>
                <div><Link className={styles.link} to={'/favourite'}>Favorite Pokemons</Link></div>

        </div>
    );
};

export default Header;