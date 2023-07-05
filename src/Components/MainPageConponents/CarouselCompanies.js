import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Box, IconButton} from '@mui/material';
import {useTheme} from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";

const HorizontalCarousel = ({ images }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const maxSteps = Math.ceil(images.length / 3);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    const handleChangeIndex = (index) => {
        setActiveStep(index);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                width: '100%',
                position: 'relative',
            }}
        >
            <IconButton
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{
                    position: 'absolute',
                    left: theme.spacing(1),
                    zIndex: 1,
                    color: theme.palette.common.white,
                }}
            >
                <KeyboardArrowLeft />
            </IconButton>
            <SwipeableViews index={activeStep} onChangeIndex={handleChangeIndex} enableMouseEvents style={{ overflowX: 'hidden' }}>
                {Array.from({ length: maxSteps }).map((_, step) => (
                    <Grid container key={step} spacing={2}>
                        {images.slice(step * 3, (step + 1) * 3).map((image) => (
                            <Grid key={image.label} item xs={4}>
                                <Box
                                    component="img"
                                    sx={{
                                        maxHeight: 400,
                                        display: 'block',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={image.imgPath}
                                    alt={image.label}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </SwipeableViews>
            <IconButton
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                sx={{
                    position: 'absolute',
                    right: theme.spacing(1),
                    zIndex: 1,
                    color: theme.palette.common.white,
                }}
            >
                <KeyboardArrowRight sx={{color: 'black'}} />
            </IconButton>
        </Box>
    );
};


export default HorizontalCarousel;
