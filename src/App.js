import { useState, useEffect } from 'react';
import { Movies } from './Movies';
import { Preloader } from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type = 'all') => {
        if (!str) return;
        
        setLoading(true);
        const typeParam = type !== 'all' ? `&type=${type}` : '';
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${typeParam}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setMovies([]);
                setLoading(false);
            });
    };

    // Загрузка фильмов по умолчанию
    useEffect(() => {
        searchMovies('matrix', 'all');
    }, []);

    return (
        <div className="App">
            <Header searchMovies={searchMovies} />
            <div className='main'>
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </div>
            <Footer />
        </div>
    );
}

export default App;
