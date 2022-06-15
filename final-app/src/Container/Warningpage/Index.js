import React,{useState, useEffect} from 'react'
import './Warning.css'
import {Link} from 'react-router-dom'
import requests from '../../constants'
import axios from 'axios';

function Warning() {
  const[warningImage, setWarningImage] = useState([]);

  useEffect(() => {
      async function fetchImage(){
          const backImage = await axios.get(requests.fetchTrending);
          setWarningImage(backImage.data.results[
            Math.floor(Math.random() * backImage.data.results.length-1)
            ]);
              return backImage;
        }
        fetchImage();
    },[]);
  return (
      <>
    <div className='warning-wrapper'
    style={{
        backgroundSize:"cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${warningImage.backdrop_path}")`,
        backgroundPosition: "Top center",
    }}
    >
        <div className='card'>
            <h1>Do you really want to log out ?</h1>
            <div className='warning-butons'>
            <Link to='/'><button type="text" className='warning-buton'>Continue</button></Link>
            <Link to='/Home'><button type="text" className='warning-buton'>Cancel</button></Link>
            </div> 
        </div>
    </div>
    </>
  )
}

export default Warning