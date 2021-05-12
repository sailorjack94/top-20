import React from 'react';
import './Song.css'

const Song = ({song, value}) => {

    // const songName = song['song'].title.label;

    return (
        <div>
        <b>{value +1} : </b>{song.title.label}
        
        </div>
    )
    // return <li>{console.log({songName})}</li>


};

export default Song;