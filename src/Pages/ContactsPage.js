import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Grid} from "@mui/material";
import FeedbackForm from "../Components/FeedbackForm";
import {ToastContainer} from "react-toastify";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    mapContainer: {
        width: '600px',
        height: '400px',
        marginTop: theme.spacing(2),
        position: 'relative', // Add this line
    },
    map: {
        width: '100%',
        height: '100%',
    },
    containerForm: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
    },
}));

function ContactsPage() {
    const matches = useMediaQuery('(max-width:1370px)');

    let mapWidth = '560px';
    let mapHeight = '500px';

    if (matches) {
        mapWidth = '80%';
        mapHeight = '250px';
    }

    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h4" mt={4} align='left' gutterBottom>
                Контакты
            </Typography>
            <Typography variant="subtitle1" align="left" gutterBottom>
                Обращайтесь к нам по телефону, по электронной почте или договориться о встрече в нашем офисе. Будем рады помочь вам и ответить на все ваши вопросы.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography my={3} variant='h5'>
                            Адрес офиса в Волгограде:
                        </Typography>
                    </div>
                    <div>
                        <Typography my={3}>
                            <LocationOnIcon/>400001, г. Волгоград, ул. Канунникова, 6/1, помещение 1<br/>
                            ост. Площадь Чекистов, офисное здание возле фабрики «Конфил».<br/>
                            Время работы: с 8:30 до 17:30
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            <MailIcon/>E-mail: office@npo-gradient.ru
                        </Typography>
                    </div>
                    <div>
                        <Typography mb={3}>
                            <PhoneIcon/>Тел./Факс: +7 (8442) 60 55 30
                        </Typography>
                    </div>


                    <div className={classes.containerForm}>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            Оставьте ваши данные и мы свяжемся с вами
                        </Typography>
                        <FeedbackForm />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <div style={{position: "inherit", overflow: "hidden"}}>
                            <div style={{position: "relative", overflow: "hidden"}}>
                                <a
                                    href="https://yandex.ru/maps/38/volgograd/?utm_medium=mapframe&utm_source=maps"
                                    style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}
                                >
                                    Волгоград
                                </a>
                                <a
                                    href="https://yandex.ru/maps/38/volgograd/house/ulitsa_kanunnikova_6_1/YE0YcwdgQEcFQFpifXtxc35lbQ==/?ll=44.496001%2C48.701031&utm_medium=mapframe&utm_source=maps&z=16.62"
                                    style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}
                                >
                                    Улица Канунникова, 6/1 — Яндекс Карты
                                </a>
                                <iframe
                                    src="https://yandex.ru/map-widget/v1/?ll=44.496001%2C48.701031&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Nzg0ODM2MRJI0KDQvtGB0YHQuNGPLCDQktC-0LvQs9C-0LPRgNCw0LQsINGD0LvQuNGG0LAg0JrQsNC90YPQvdC90LjQutC-0LLQsCwgNi8xIgoN8wAyQhUfz0JC&z=16.62"
                                    width={mapWidth} height={mapHeight} frameBorder="1" allowFullScreen="true" style={{position: "relative"}}
                                >
                                </iframe>
                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactsPage;