import React from 'react'
import './Home.css'
import './Videoitem.css'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { isVideoID } from '../../store/getIdSlice'

function Videoitem(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
 

    const play = () => {
        dispatch(isVideoID(props.videoId))
        navigate(`/play-video/id=${props.videoId}`)
    }

    return (
        <>
            <div className="card bg-transparent custom-card" >
                <div className="card-img-top custom-img">
                    <ReactPlayer
                        url={props.videoUrl}
                        width="100%"
                        height="100%"
                        // playing={true}
                        muted={true}
                    />
                </div>
                <div className="card-body" style={{ padding: "0px 0px 9px 4px" }}>
                    <p className="card-text text-light">{props.videoTitle}</p>
                </div>

                <button className='btn watch-btn' onClick={() => { play() }}>Watch Full Video</button>
            </div>

        </>
    )
}

export default Videoitem