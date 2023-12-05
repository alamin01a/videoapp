import React, { useEffect, useState } from 'react'
import './Home.css'
import Videoitem from './Videoitem';
import Loader from '../loader/Loader';
import { useDispatch } from 'react-redux';
import { fetchedAPIarray } from '../../store/searchResultSlice'
import { useNavigate } from 'react-router-dom';
import MobSearchInput from '../mobSearchInput/MobSearchInput';

function Home(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [apiarray, setApiarray] = useState([])
    const [page, setpage] = useState(2)
    const [loading, setloading] = useState(true)

    const updateVideo = async () => {
        props.setProgress(5)
        let apiUrl = "https://alamin01a.github.io/api/page=1.json"
        setloading(true)
        props.setProgress(25)
        let apiData = await fetch(apiUrl)
        props.setProgress(45)
        let parsedApiData = await apiData.json()
        props.setProgress(55)
        let videoAPIdata = parsedApiData.videoapi
        dispatch(fetchedAPIarray(videoAPIdata))
        props.setProgress(80)
        const homePageData = parsedApiData.videoapi.slice(0, 12)
        setApiarray(homePageData);
        props.setProgress(100)
        setloading(false)
    }

    // ..........USEEFFECT............
    useEffect(() => {
        updateVideo();
        // eslint-disable-next-line
    }, [])


    // .............Previous Handle.............
    const preHandleClick = async () => {
        setpage(page - 1)
        navigate(`/page/${page}`)
        console.log('clicked-previous');
    };


    // ............Next Handle .............
    const nextHandleClick = async () => {
        setpage(page + 1)
        navigate(`/page/${page}`)
    };

    return (
        <>
            {loading && <Loader />}
            <MobSearchInput />
            <div className="area" id='mainArea'>

                {
                    apiarray
                        .map((element) => {
                            return <div key={element.id} className="singleVitem">
                                <Videoitem videoId={element.id} videoUrl={element.link} videoTitle={element.title} />
                            </div>
                        })
                }
            </div>
            <div className="handleBtn">
                <button disabled={page <= 2} type="button" className="btn btn-dark cus-btn" onClick={preHandleClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark cus-btn" onClick={nextHandleClick}> Next &rarr; </button>
            </div>
        </>
    )
}
export default Home