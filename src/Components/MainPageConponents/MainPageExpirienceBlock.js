import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import calendarIco from '../../images/icons/calendar.svg'
import mapIco from '../../images/icons/map-ico.svg'
import specialistsIco from '../../images/icons/professional.svg'
import projectsIco from '../../images/icons/project.svg'

function useAnimatedNumber(initialValue, finalValue, duration) {
    const [number, setNumber] = useState(initialValue);

    useEffect(() => {
        const increment = Math.abs(finalValue - initialValue) / (duration / 100);
        const interval = setInterval(() => {
            if (finalValue >= initialValue) {
                if (number + increment < finalValue) {
                    setNumber(number + increment);
                } else {
                    clearInterval(interval);
                    setNumber(finalValue);
                }
            } else {
                if (number - increment > finalValue) {
                    setNumber(number - increment);
                } else {
                    clearInterval(interval);
                    setNumber(finalValue);
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [number, initialValue, finalValue, duration]);

    return Math.round(number);
}

function AnimatedNumber({ initialValue, finalValue, duration, unit }) {
    const animatedValue = useAnimatedNumber(initialValue, finalValue, duration);

    return (
        <Typography variant="h2" component="div">
            {animatedValue}
            {unit}
        </Typography>
    );
}

function BlogSection() {
    const data = [
        {
            ico: calendarIco,
            title: 'Наш опыт работы',
            value: '10',
            unit: ' Лет',
        },
        {
            ico: mapIco,
            title: 'Городов',
            value: 15,
            unit: '',
        },
        {
            ico: specialistsIco,
            title: 'Специалистов',
            value: 50,
            unit: '+',
        },
        {
            ico: projectsIco,
            title: 'Проектов',
            value: 100,
            unit: '+',
        },
    ];

    return (
        <Box sx={{ py: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box sx={{ textAlign: 'center', '@media (max-width:600px)': { fontSize: '0.8em' } }}>
                                <img src={item.ico} width={70} height={70} alt=""/>
                                <AnimatedNumber
                                    initialValue={0}
                                    finalValue={item.value}
                                    duration={1000}
                                    unit={item.unit}
                                />
                                <Typography variant="h6">{item.title}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default BlogSection;
