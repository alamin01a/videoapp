import React from 'react'
import './Page.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Videoitem from '../home/Videoitem'
import {  useParams } from 'react-router-dom'
import PreNextButton from '../preNextButton/PreNextButton'
import MobSearchInput from '../mobSearchInput/MobSearchInput'

function Page(props) {
    const { pageNo } = useParams()
    const [pageApiArray, setPageApiArray] = useState([]);

    const loadpage = async () => {
        props.setProgress(5)
        let apiUrl = `https://alamin01a.github.io/api/page=${pageNo}.json`
        props.setProgress(25)
        let apiData = await fetch(apiUrl)
        props.setProgress(55)
        let parsedApiData = await apiData.json()
        props.setProgress(80)
        let videoArray = parsedApiData.videoapi
        setPageApiArray(videoArray)
        props.setProgress(100)
    }

    useEffect(() => {
        loadpage()
         // eslint-disable-next-line
    }, [pageNo])

    return (
        <>
            <MobSearchInput />
            <div className="page-Area">
                {
                    pageApiArray
                        .map((element) => {
                            return <div key={element.id} className="singleVitem">
                                <Videoitem videoId={element.id} videoUrl={element.link} videoTitle={element.title} />
                            </div>
                        })
                }
            </div>
            <PreNextButton />
        </>
    )
}

export default Page