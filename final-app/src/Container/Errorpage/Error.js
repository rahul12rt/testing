import React from 'react'
import Errorlogo from '../../Assets/Error1.png'
import './Error.css'

function Error() {
  return (
      <div className="error_wrapper">
          <div className='Error'>
              <div className='Error-logo'>
                  <img src={Errorlogo} alt="Error Occured" className='Error-image'/>
              </div>
              <div className='Error-content'>
                  <div className='Content'>
                      <h1>404 Not Found</h1>
                      <p className='error-paragraph'>The movie your are looking for temporarily unavailable. Try other keywords</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Error