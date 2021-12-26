import React from 'react'
import { getWeatherValue, setQuery } from '../../redux/reducers/weatherReducer'
import { useDispatch } from 'react-redux'

import styles from './SearchMenu.module.css'


const SearchMenu = ({ query }) => {
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(getWeatherValue(query))
    }

    const setValueQuery = query => {
        dispatch(setQuery(query))
    }

    return (
        <div className={styles.searchBox}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.searchBar}
                    placeholder="Search..."
                    value={query}
                    onChange={e => setValueQuery(e.target.value)}
                />
                <input
                    type="submit"
                    value="Submit"
                    className={styles.buttonInput}
                />
            </form>
        </div>
    )
}

export default SearchMenu
