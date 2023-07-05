import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import lic1 from '../../images/licenses/лицензия 1.jpg';
import lic2 from '../../images/licenses/лицензия 2.jpg';
import lic3 from '../../images/licenses/лицензия 3.jpg';
import lic4 from '../../images/licenses/лилцензия 4.jpg';
import pdf1 from '../../documents/lic1.pdf'
import pdf2 from '../../documents/gos-taina.pdf'
import pdf3 from '../../documents/opred-vid-rabot.pdf'
import pdf4 from '../../documents/thopographic_lic.pdf'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const openPdf = (pdfPath) => {
    window.open(pdfPath, '_blank');
};

const images = [
    {
        label: 'Производство маркшейдерских работ',
        pdfPath: pdf1,
        imgPath:
            lic1,
    },
    {
        label: 'Геодезическая и картографическая деятельность',
        pdfPath: pdf2,
        imgPath:
            lic2,
    },
    {
        label: 'Проведение работ с использованием сведений, составляющих государственную тайну',
        pdfPath: pdf3,
        imgPath:
            lic3,
    },
    {
        label: 'Допуск к работам, влияющим на безопасность объектов капитального строительства',
        pdfPath: pdf4,
        imgPath:
            lic4,
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 7,
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    px: 2,
                    justifyContent: 'center',
                    bgcolor: '#1e1e1e',
                }}
            >
                <Typography textAlign={'center'} fontSize={14}>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 500,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                                onClick={() => openPdf(step.pdfPath)}
                                style={{ cursor: 'pointer' }}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                sx={{
                    bgcolor: '#1e1e1e',
                    borderBottomRightRadius: 7,
                    borderBottomLeftRadius: 7
                }}
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;