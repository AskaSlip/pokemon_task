import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import styles from './PaginationComponent.module.css'

interface IProps {
    prev: string | null,
    next: string | null
}

const Pagination: FC<IProps> = ({prev,next}) => {

const [query, setQuery] = useSearchParams({page: '1'})

    return (
        <div className={styles.wrap}>
            <button className={styles.btn}  disabled={!prev} onClick={() => {
                const page = query.get('page')
                if (page) {
                    let currentPage= +page
                    currentPage --;
                    setQuery({page: currentPage.toString()})
                }
            }}>
                <img className={styles.left} src="/pagi.png" alt="arrow"/>
            </button>
            <button className={styles.btn} disabled={!next} onClick={() => {
                const page = query.get('page')
                if (page) {
                    let currentPage = +page
                    currentPage++;
                    setQuery({page: currentPage.toString()})
                }
            }}>
                <img className={styles.right} src="/pagi.png" alt="arrow"/>
            </button>
        </div>
    );
};

export default Pagination;