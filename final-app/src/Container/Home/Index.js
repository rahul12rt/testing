import React, {useState,useEffect} from 'react';
import '../../App.css';
import Banner from '../Banner/Index';
import Row from '../../Components/Row/Index';
import requests from '../../constants';
import Navbar from '../../Components/Navbar/Index';
import ClipLoader
from "react-spinners/ClipLoader";
import  './Home.css'
import {useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  useEffect(()=>{
    if (!localStorage.getItem('Token')){
      navigate('/SignIn')
    }

  },[])
  
  
  return (
    <>
    {
      loading? 
      <div className='loader_wrapper'>
      <ClipLoader
      color="#80ffd4" width="100px" height="100px"/>
      </div>
      :
      <div className="home">
    <Navbar/>
           <Banner fetchRandom={requests.fetchTrending} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      

    </div>
   
      
    }
     </>
  );
}

export default Home;