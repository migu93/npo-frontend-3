import * as React from 'react';
import { Paper, IconButton, Box } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import {useState} from "react";

const Carousel = ({ images, height, width, interval }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    React.useEffect(() => {
        const timer = setInterval(handleNextClick, interval);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ position: 'relative', width, height }}>
            {images.map((image, index) => (
                <Paper
                    key={index}
                    component="img"
                    src={image}
                    alt={`Carousel slide ${index}`}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: 'opacity 300ms ease-in-out',
                    }}
                />
            ))}
            <IconButton
                onClick={handlePrevClick}
                sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
            >
                <NavigateBefore />
            </IconButton>
            <IconButton
                onClick={handleNextClick}
                sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
            >
                <NavigateNext />
            </IconButton>
        </Box>
    );
};

export default Carousel;
