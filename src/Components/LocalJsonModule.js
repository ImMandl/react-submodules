import React, { useState } from 'react'
import mtv from '../Files/MTV'
import LocalJsonSubmodule from './LocalJsonSubmodule'
import './LocalJsonModule.css'

const LocalJsoneModule = () => {

    const [videos, setVideos] = useState(mtv.videos)

    /* Lar os filtrere mtv arrayet på input */
    const filterVideos = (e) => {
        setVideos(
            mtv.videos.filter(
                video => video.song.toLowerCase().includes(e.target.value)
            )
        )
    }


    return (
        <div className="submodule local-json scroll">
            <h2>Local JSON module</h2>
            <p>This module uses data from a local JSON file. JSON (JavaScript Object Notation) is a lightweight data-interchange format.</p>
            <p>Scroll inside this module to see entire list</p>
            <input type="text" placeholder="Type to filter songs..." onInput={filterVideos} />
            <p>The videos on the first MTV broadcast was:</p>
            <div className="videos">
                {
                    videos.map(
                        (video, i) =>
                            <LocalJsonSubmodule key={i}
                                song={video.song}
                                artist={video.artist}
                                number={video.number}
                                appearance={video.appearance}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default LocalJsoneModule