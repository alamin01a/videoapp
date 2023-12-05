import './Loader.css'
import { ClipLoader } from 'react-spinners';

import React from 'react'

function Loader() {
  return (
    <>
      <div className='loader'><ClipLoader color="#4ff3ff" size='4rem'/></div>
    </>
  )
}

export default Loader