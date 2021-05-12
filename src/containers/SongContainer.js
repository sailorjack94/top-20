import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList'
import './SongContainer.css'


const SongContainer = () => {

    const [top20, setTop20] = useState([]);

    useEffect(() => {
        getSongs();
    }, []);

    const getSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(results => results.json())
        .then(songs => setTop20(songs['feed']['entry']))
    };

    return (
        <div className = 'song-container'>
            <SongList top20={top20} />
        </div>
    )




}

export default SongContainer;