import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Videoitem from '../home/Videoitem';
import './RandomFetched.css'

function RandomFetched() {
    const isId = useSelector((state) => state.getID)
    const [showVideoArray, setShowvideoArray] = useState([])
    const [minNumberRandom, setMinNumberRandom] = useState(Math.floor(Math.random() * 20))
    const [maxNumberRandom, setMaxNumberRandom] = useState(Math.floor(Math.random() * (38 - 30 + 1)) + 30)

    const showFuncArray = async () => {
        let mainApi = "https://alamin01a.github.io/api/page=1.json"
        let dataFetched = await fetch(mainApi)
        let parsedFetchedData = await dataFetched.json()
        let parsedVideoData = parsedFetchedData.videoapi
        const sliceArray = parsedVideoData.slice(minNumberRandom, maxNumberRandom)
        setShowvideoArray(sliceArray)
    }

    // // ..........USEEFFECT............
    useEffect(() => {
        showFuncArray();
        // eslint-disable-next-line
    }, [isId.videoId])


    return (
        <>
            <div className="randomFetchedArea" style={{ width: '98%' }}>
                <div className="randomDisplayArea">

                    {
                        showVideoArray.filter((ele) => {
                            if (ele.id !== isId.videoId) {
                                return ele
                            }
                        })
                            .map((element) => {
                                return <div key={element.id} className="singleVitem">
                                    <Videoitem videoId={element.id} videoUrl={element.link} videoTitle={element.title} />
                                </div>
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default RandomFetched