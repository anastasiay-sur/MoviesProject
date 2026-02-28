import { useState } from 'react'

const Search = (props) => {
    const {
        searchMovies = Function.prototype
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');


    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type)
    }

    const radioContainerStyle = {
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
    };

    const radioItemStyle = {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        flexGrow: 1,
        justifyContent: 'center',
    };

    return <div className="search-section" >

        <div className="d-flex" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Поиск"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <button
                className="btn btn-outline-success"
                onClick={() =>
                    searchMovies(search, type,)
                }>
                Поиск
            </button>
        </div>

        <div style={radioContainerStyle}>
            <label style={radioItemStyle}>
                <input
                    type="radio"
                    name='type'
                    data-type='all'
                    onChange={handleFilter}
                    checked={type === 'all'}
                />
                <span>All</ span>
            </label>
            <label style={radioItemStyle}>
                <input
                    type="radio"
                    name='type'
                    data-type='movie'
                    onChange={handleFilter}
                    checked={type === 'movie'}
                />
                <span>Movies only</ span>
            </label>
            <label style={radioItemStyle}>
                <input
                    type="radio"
                    name='type'
                    data-type='series'
                    onChange={handleFilter}
                    checked={type === 'series'}
                />
                <span>Series only</ span>
            </label>
        </div>
    </div>
}


export { Search }