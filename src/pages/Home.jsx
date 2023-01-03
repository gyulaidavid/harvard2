import React, { useState, useEffect } from 'react'

import ImageList from '@mui/material/ImageList';
import { useNavigate } from 'react-router-dom';
import Artwork from '../components/Artwork';

function Home({url}) {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(url, data.records)
            setArtworks(data.records.length ? data.records : [])
        })
    }, [url]);

    const picLayout = [
        {'rows': 2, 'cols': 2}, {}, {}, {'cols': 2}, {'rows': 2, 'cols': 2}, {}, {}
    ]

    const navigate = useNavigate();
    const handleRedirect = (event) => navigate("/" + event.target.getAttribute('data-id'));

    return (
        <ImageList
            sx={{ width: '100%', height: '100%' }}
            variant="quilted"
            cols={4}
            rowHeight={300}
            >
            {artworks.length ? artworks.map((item, i) => {
                item = {
                    ...item,
                    ...picLayout[i % picLayout.length]
                };
                return (
                    <Artwork item={item} handleRedirect={handleRedirect} />
                )
            }) : (<p>No items found.</p>)}
        </ImageList>
    )
}

export default Home;