import React, { useState } from 'react'
import './PreNextButton.css'
import { useNavigate } from 'react-router-dom';

function PreNextButton() {
    const Navigate = useNavigate()
    const [page, setpage] = useState(3)
    const [xpage, setXpage] = useState(0)


    // .............Previous Handle.............
    const preHandleClick = () => {

        if (xpage <= 1) {
            Navigate('/')
        } else {
            Navigate(`/page/${xpage}`)
            setXpage(xpage - 1)
        }
    };

    // ............Next Handle .............
    const nextHandleClick = () => {

        Navigate(`/page/${page}`)
        setXpage(page - 1)
        setpage(page + 1)
        console.log(xpage);
    };

    return (
        <>
            <div className="handleBtn">
                <button disabled={page <= 0} type="button" className="btn btn-dark cus-btn" onClick={preHandleClick}> &larr; Previous</button>

                <button disabled={page >= 4} type="button" className="btn btn-dark cus-btn" onClick={(event) => { nextHandleClick(event) }}> Next &rarr; </button>
            </div>
        </>
    )
}

export default PreNextButton