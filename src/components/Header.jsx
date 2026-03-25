import { useState } from 'react';
import Search from './Search';
import Filter from './Filter';

function Header({ searchMovies }) {
    const [currentType, setCurrentType] = useState('all');
    const [currentQuery, setCurrentQuery] = useState('');

    const handleSearch = (query) => {
        setCurrentQuery(query);
        searchMovies(query, currentType);
    };

    const handleFilterChange = (type) => {
        setCurrentType(type);
        if (currentQuery) {
            searchMovies(currentQuery, type);
        }
    };

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <a href="/">
                    <h1>🎬 MoviesProject</h1>
                </a>
            </div>
            <Search onSearch={handleSearch} />
            <Filter onFilterChange={handleFilterChange} initialType={currentType} />
        </header>
    );
}

export default Header;


