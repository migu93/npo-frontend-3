import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ActionAreaCard from "./ActionAreaCard";
import monitoring from '../../images/monitoring.png'
import laserScan from '../../images/LaserScan.jpg'
import basedStantion from '../../images/basedStantion.png'
import AirPhoto from '../../images/AirPhoto.png'
import {headerLinks} from "../../utils/routes";
const AboutCompany = () => {

    return (
            <Box sx={{ py: 8 }}>
                <Typography variant="h4" align='left' gutterBottom>
                    О компании
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                    ООО «НПО «Градиент» - это современная компания, которая оказывает профессиональные услуги по выполнению маркшейдерских, топографо-геодезических работ, обработке данных дистанционного зондирования, лазерного сканирования, а также аэрофотосъёмки и автоматического деформационного мониторинга.
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Автоматический мониторинг'}
                                        altText={'Автоматический мониторинг'}
                                        description={'Автоматический мониторинг'}
                                        path={'/blog-automatic-scanning'}
                                        imageUrl={monitoring}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Аэрофотосъемка'}
                                        altText={'Аэрофотосъемка'}
                                        description={'Аэрофотосъемка'}
                                        path={'/blog-aerial-photography'}
                                        imageUrl={AirPhoto}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Лазерное сканирование'}
                                        altText={'Лазерное сканирование'}
                                        description={'Лазерное сканирование'}
                                        path={'/blog-laser-scanning'}
                                        imageUrl={laserScan}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ActionAreaCard title={'Базовые станции'}
                                        altText={'Базовые станции'}
                                        description={'Базовые станции'}
                                        path={'/base-stations'}
                                        imageUrl={basedStantion}/>
                    </Grid>
                </Grid>
        </Box>
    );
};

export default AboutCompany;
