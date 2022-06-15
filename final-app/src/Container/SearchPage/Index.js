import React,{useState, useEffect} from "react";
import './Search.css';
import axios from 'axios';
import{Link} from 'react-router-dom'
import Error from "../Errorpage/Error";


function Search() {
  const [searchMovies,setSearchMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('');
 
  async function onSubmit(e){
   e.preventDefault();
    const searchAPI = `https://api.themoviedb.org/3/search/multi?api_key=8612aaeb857886e801ddfca868da9cf3&language=en-US&query=${searchValue}&`; 
    const response = await axios.get(searchAPI);
    setSearchMovies(response.data.results)
  }

  useEffect(() => {
    async function fetchSearch(){
     const request = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=8612aaeb857886e801ddfca868da9cf3`);
     setSearchMovies(request.data.results);
     return request;
    } fetchSearch();
    
  }, []);

  return(<>    
  <div className="search_Wrapper">
  <div className="search">
    <form onSubmit={onSubmit}>
    <h1 className="Search-Logo">INFI</h1>
    <input type='search' 
      placeholder='Search Your Fav'
      className='search_bar '
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)} ></input>
    </form>
    </div>
    <div className="fade-up"/>
    <div className="Search_container">
    {searchMovies.length > 0 ? searchMovies.map((movie,id) => (
        <div key={movie.id} className="row_posterr">
        <img 
     key={id}
     className="row_poster"
     src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
     alt={movie.name}
     /> 
     <div className='Overlay'>
       <div className='Content'>
       <Link to={`/Moviedetails/${movie.id}`}><button type="text" className='row-button'>View More</button></Link>
       </div>    
     </div>
     </div>
      )) : <Error/> }
      </div>
  </div>
  </>);
  }

export default Search;