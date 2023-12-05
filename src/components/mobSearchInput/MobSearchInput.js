import React from 'react'
import './MobSearchInput.css'
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchItemValue } from '../../store/searchtermSlice'

function MobSearchInput() {
  const mobileInputVal = useRef("")
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const showClick = useSelector((state) => state.search);

  const [isVlaueMobile, setIsVlaueMobile] = useState("")

  const changeValue = (event) => {
    setIsVlaueMobile(event.target.value)
  }

  const searchFunc = () => {
    if (mobileInputVal.current.value === null || mobileInputVal.current.value === "") {
      return null
    } else {
      dispatch(searchItemValue(mobileInputVal.current.value))
      navigate(`/searchresult`)
      setIsVlaueMobile("")
    }
  }


  return (
    <>
      <div className={showClick.value ? 'inpDiv input-group mb-2 showInp' : 'inpDiv input-group mb-2'}>
        <input ref={mobileInputVal} type="text" className="in-css
                    " placeholder="Search Here" value={isVlaueMobile} onChange={(event) => { changeValue(event) }} />
        <button className="btn btn-outline-secondary btn-css" onClick={(event) => { searchFunc(event) }} type="button">Search</button>
      </div>
    </>
  )
}

export default MobSearchInput