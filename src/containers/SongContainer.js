import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList'
import GenreSelector from '../components/GenreSelector'
import './SongContainer.css'


const SongContainer = () => {

    const [top20, setTop20] = useState([]);
    const [genre, setGenre] = useState(0);

    useEffect(() => {
        getSongs(genre);
    }, [genre]);

    const changeGenre = function(genre) {
        setGenre(genre)
    }

    const getSongs = function(genre) {
        if (genre == 0) {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(results => results.json())
        .then(songs => setTop20(songs['feed']['entry']))
        } else if (genre == 1) {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json')
        .then(results => results.json())
        .then(songs => setTop20(songs['feed']['entry']))
        } else if (genre == 2) {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json')
        .then(results => results.json())
        .then(songs => setTop20(songs['feed']['entry']))
        } else if (genre == 3) {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json')
        .then(results => results.json())
        .then(songs => setTop20(songs['feed']['entry']))
        }
    }

    // const getSongs = function() {
    //     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=200/json')
    //     .then(results => results.json())
    //     .then(songs => setTop20(songs['feed']['entry']))
    // };

    return (
        <div className = 'song-container'>
            <SongList top20={top20} />
            <GenreSelector genre={genre} changeGenre={changeGenre} />
        </div>
    )

}

export default SongContainer;