import React, { useState, useRef, useEffect } from 'react'

import ImageListItem from '@mui/material/ImageListItem';
import PacmanLoader from "react-spinners/PacmanLoader";

function Artwork({item, handleRedirect}) {
    const [loading, setLoading] = useState(true);
    const ref = useRef()

    const override = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: "inline-block",
        margin: "-10px -40px",
    };

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
            style: {
                cursor: 'pointer'
            }
        };
    }

    useEffect(() => {
        if (ref.current && ref.current.complete) {
            setLoading(false)
        }
    })

    function loadHandle(event) {
        if (event.target.complete) {
            setLoading(false)
        }
    }

    return (
        <ImageListItem key={item.baseimageurl} cols={item.cols || 1} rows={item.rows || 1}>
            {loading && <PacmanLoader
                color='#1976d2'
                loading={loading}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />}
            <img
                {...srcset(item.baseimageurl, 300, item.rows, item.cols)}
                alt={item.description}
                onClick={handleRedirect}
                data-id={item.id}
                ref={ref}
                onLoad={loadHandle}
            />
        </ImageListItem>
    )
}

export default Artwork