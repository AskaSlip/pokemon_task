import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/pokemons'}>All Pokemons</Link></li>
                <li><Link to={'/search'}>Search Pokemon</Link></li>
                <li><Link to={'/favourite'}>Favourite Pokemons</Link></li>
            </ul>
        </div>
    );
};

export default Header;