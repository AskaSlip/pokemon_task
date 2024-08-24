import React from 'react';
import SearchByName from "../components/SearchComponent/SearchByName";
import SearchByType from "../components/SearchComponent/SearchByType";
import SearchByAbility from "../components/SearchComponent/SearchByAbility";

const SearchPage = () => {

    //todo search by abilities
    //todo search by type

    return (
        <div>
            here search
            <SearchByName/>
            <SearchByType/>
            <SearchByAbility/>
        </div>
    );
};

export default SearchPage;