import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title , fetchUrl}) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData(){
     const request = await axios.get(fetchUrl);
     setMovies(request.data.results);
     console.log('row',request.data.results);
     return request;
    } fetchData();
    
  }, [fetchUrl]);
 
    return (
      
      <div className="row" >
      <h1>{title}</h1>

      <div className="row_container">
        {movies?.map((movie, id) =>( 
          <div key={movie.id} className="row_posterr">
             <img 
          key={id}
          className="row_poster"
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path || movie.backdrop_path}`}
          alt={movie.name}
          /> 
          <div className='Overlay'>
            <div className='Content'>
            <Link to={`/Moviedetails/${movie.id}`}><button type="text" className='row-button'>View More</button></Link>
            </div>    
          </div>
          </div>
              ))}
            
            </div>
        </div>
    )
}

export default Row;