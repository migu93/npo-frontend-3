import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
    scrollToTop: {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: 1000,
    },
}));

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                zIndex: 1000,
                '@media (max-width:600px)': {
                    bottom: '5px',
                    right: '5px',
                },
            }}
        >
            {isVisible &&
                <Fab color="primary" onClick={scrollToTop}>
                    <ArrowUpwardIcon />
                </Fab>}
        </Box>
    );
}

export default ScrollTopButton;
