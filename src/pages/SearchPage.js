import React from 'react'
import './SearchPage.css';
import { useStateValue } from '../context/StateProvider';
import useGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <h2>Your term is {term}</h2>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
