import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "../App.css"; 


function Artwork() {
    const { id } = useParams();
    const [picture, setPicture] = useState([]);
    const [isFavorite, setIsFavorite] = useState(true);

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
                <Button
        sx={{
            color: 'orange',
        
            
        }}
        variant="elevated"
        onClick={() => {
          setIsFavorite((oldValue) => !oldValue);
        }}
      >
        {isFavorite ? "☆" : "★"}
      </Button>
            <img src={picture && picture.baseimageurl} />
            <p>{picture.description && ("Description: " + picture.description)}</p>
            <p>{picture.copyright && ("Copyright: " + picture.copyright)}</p>
            <p>{picture.date && ("Date: " + picture.date)}</p>
            <p>{picture.technique && ("Technique: " + picture.technique)}</p>
        </div>
    )
}

export default Artwork