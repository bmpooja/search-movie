import React,{ useState, useEffect }  from 'react'
import MovieCard from './MovieCard';


export default function SearchMovie(){

    const [query, setQuery] = useState('');
    const [movies, setMovies]= useState([]);

    const searchMovie = async(e) =>{
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=be6604c942d29ac10ef8068731033e21&language=en-US&query=${query}&page=1&include_adult=false`
    
        try{
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        console.log(data);
        } catch(err){
            console.log(err);
        }
    }
    return(
        <>
        <form className="form" onSubmit={searchMovie}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input"
             type ="text"
              name="query"
              value = {query}
              onChange ={(e) => setQuery(e.target.value)}/>
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie = {movie} />
                ))}
            </div>    
       
        </>
    )
}