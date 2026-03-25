import { useState } from 'react';

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            onSearch(search);
        }
    };

    return (
        <div className="search-section">
            <div className="d-flex search" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Поиск фильмов и сериалов..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn btn-outline-success"
                    onClick={() => onSearch(search)}
                >
                    Поиск
                </button>
            </div>
        </div>
    );
};

export default Search;