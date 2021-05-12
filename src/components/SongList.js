import React from 'react';
import Song from './Song';


const SongList = ({top20}) => {

    const songNodes = top20.map((song, index) => {
        return <Song song={song} key={index} />
    })

    return (
        <div>
            {songNodes}
        </div>
    );
};

export default SongList;