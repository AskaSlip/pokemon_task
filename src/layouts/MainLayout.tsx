import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import styles from './Main.module.css'

const MainLayout = () => {
    return (
        <div className={styles.back}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;