import { useState } from 'react';

const Filter = ({ onFilterChange, initialType = 'all' }) => {
    const [type, setType] = useState(initialType);

    const handleFilter = (selectedType) => {
        setType(selectedType);
        if (onFilterChange) {
            onFilterChange(selectedType);
        }
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        marginTop: '10px'
    };

    const buttonStyle = (isActive) => ({
        cursor: 'pointer',
        backgroundColor: isActive ? '#a0ceab' : null,
        transition: 'all 0.3s',

    });

    return (
        <div style={buttonContainerStyle}>
            <button
                className="btn btn-outline-success"
                style={buttonStyle(type === 'all')}
                onClick={() => handleFilter('all')}
            >
                Все
            </button>
            <button
                className="btn btn-outline-success"
                style={buttonStyle(type === 'movie')}
                onClick={() => handleFilter('movie')}
            >
                🎬 Фильмы
            </button>
            <button
                className="btn btn-outline-success"
                style={buttonStyle(type === 'series')}
                onClick={() => handleFilter('series')}
            >
                📺 Сериалы
            </button>
        </div>
    );
};

export default Filter;