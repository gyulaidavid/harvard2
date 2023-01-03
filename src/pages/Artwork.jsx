import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Artwork() {
    const { id } = useParams();
    const [picture, setPicture] = useState([]);

    const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";

    useEffect(() => {
        fetch(
            `https://api.harvardartmuseums.org/image/${id}?apikey=${apiKey}`
        )
        .then((res) => res.json())
        .then((data) => setPicture(data))
    }, []);

    return (
        <div>
            <img src={picture && picture.baseimageurl} />
            <p>{picture.description && ("Description: " + picture.description)}</p>
            <p>{picture.copyright && ("Copyright: " + picture.copyright)}</p>
            <p>{picture.date && ("Date: " + picture.date)}</p>
            <p>{picture.technique && ("Technique: " + picture.technique)}</p>
        </div>
    )
}

export default Artwork