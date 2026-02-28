import { useState, useEffect } from 'react'
import { Movies } from '../Movies'
import { Preloader } from './Preloader'
import { Search } from './Search'

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const searchMovies = (str, type = 'all') => {
        setLoading(true)
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    return <div className="main">
        <Search searchMovies={searchMovies} />
        <br />
        {loading ? <Preloader /> : <Movies movies={movies} />}
    </div>
}


export default Main