import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { showInput } from '../../store/searchSlice'
import { searchItemValue } from '../../store/searchtermSlice';
import { NavLink, useNavigate } from 'react-router-dom'
import { useRef } from 'react'


function Navbar() {
    const inputVal = useRef("")
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const showClick = useSelector((state) => state.search);
    const [isMobMenu, setIsMobMenu] = useState(false)
    const [isVlaue, setIsValue] = useState("")

    const OpenMenu = () => {
        setIsMobMenu(true)
    }

    const CloseMenu = () => {
        setIsMobMenu(false)
    }

    const changeValue = (event) => {
        setIsValue(event.target.value)
    }

    const navSearchFunc = () => {
        console.log(inputVal.current.value);
        if (inputVal.current.value === null || inputVal.current.value === "") {
            return;
        } else {
            dispatch(searchItemValue(inputVal.current.value))
            navigate(`/searchresult/${inputVal.current.value}`)
            setIsValue("")
        }

    }


    const showSraerchInput = () => {
        if (showClick.value === false) {
            dispatch(showInput(true))
        } else if (showClick.value === true) {
            dispatch(showInput(false))
        }
    }


    const catagoryClick = (event) => {
        console.log("catagory");
        console.log(event.target.innerHTML);
        dispatch(searchItemValue(event.target.innerHTML))
    }

    return (
        <nav className="nav-css sticky-top navbar" >
            <div className="container">
                <div className="logo-css" href="#">VideoApp.</div>
                <div className={isMobMenu ? 'right active' : 'right'} >
                    <ul className='ul-css' id='navUl'>
                        <li className='marginli '>
                            <NavLink to='/' className='li-a-css'>Home</NavLink>
                        </li>
                        <li className='marginli '>
                            <NavLink to='/aboutus' className='li-a-css'>About</NavLink>
                        </li>
                        <li className='marginli '>
                            <NavLink to='/contactus' className='li-a-css'>Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown li-a-css ">
                            <a className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catarogies
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink to='/catagory' className="dropdown-item" onClick={(event) => { catagoryClick(event) }}>HTML</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/catagory' onClick={(event) => { catagoryClick(event) }}>CSS</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/catagory' onClick={(event) => { catagoryClick(event) }}>JAVASCRIPT</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/catagory' onClick={(event) => { catagoryClick(event) }}>REACT</NavLink></li>
                            </ul>
                        </li>
                    </ul>


                    <span className="cross" onClick={CloseMenu}><RxCross2 /> </span>
                </div>

                <div className='searchDiv'>
                    <input ref={inputVal} className='searchInput' type="text" placeholder="Search" value={isVlaue} onChange={(event) => { changeValue(event) }} />
                    <span className='SearchIcon' onClick={(event) => { navSearchFunc(event) }}>
                        <BsSearch size='1rem' />
                    </span>
                </div>

                <span className='MobSearchIcon' onClick={showSraerchInput}><BsSearch size='1rem' /></span>

                <span className={isMobMenu ? `hamburger dis-color` : `hamburger`} onClick={OpenMenu}><GiHamburgerMenu /></span>
            </div>
        </nav>
    )
}

export default Navbar