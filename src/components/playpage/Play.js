import React, { useEffect, useState } from 'react'
import './Play.css'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import MobSearchInput from '../mobSearchInput/MobSearchInput'
import RandomFetched from '../randomFetched/RandomFetched'


function Play(props) {

  const { videoid } = useParams()
  const [playData, setplayData] = useState({})

  const PlayVideo = async () => {
    props.setProgress(5)
    let playUrl = `https://alamin01a.github.io/videoplay/${videoid}.json`
    let playVideoData = await fetch(playUrl)
    props.setProgress(30)
    let parsedPlayData = await playVideoData.json()
    props.setProgress(70)
    setplayData(parsedPlayData)
    props.setProgress(100)
  }

  useEffect(() => {
    PlayVideo()
     // eslint-disable-next-line
  }, [videoid])

  return (
    <>
      <MobSearchInput />
      <div className="playPageArea">
        <div className="card card-css mt-1">
          <h5 className="card-title">{playData.title}</h5>
          <div className='player-div'>
            <ReactPlayer
              url={playData.link}
              width="100%"
              height="100%"
              // playing={true}
              controls
            />
          </div>
        </div>
      </div>
      <RandomFetched />
    </>
  )
}

export default Play