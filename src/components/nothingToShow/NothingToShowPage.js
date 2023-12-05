import React, { useEffect } from 'react'
import './NothingToShowPage.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NothingToShowPage(props) {
    const searchWord = useSelector((state) => state.searchterm)

    const progressBarFunc = () => {
        props.setProgress(5)
        setTimeout(() => {
            props.setProgress(100)
        }, 200)
    }

    useEffect(() => {
        progressBarFunc()
    }, [searchWord.value])


    return (
        <>
            <p className='headingNotFound mt-3'> You are searching for: {searchWord.value}</p>

            <div className="nothingPageArea">
                <div className="card text-center notFoundcard ">
                    <div className="card-body bg-dark rounded-3">
                        <h5 className="card-title text-white customh5">Not Found</h5>
                        <p className="card-text text-light">Data is not available to our site</p>
                        <Link to={'/'} className="btn btn-primary mt-3">Go to Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NothingToShowPage