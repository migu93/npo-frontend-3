import {Card, Grid} from "@material-ui/core";
import {Box, Button, CardActions, Container, List, ListItem, ThemeProvider, Typography} from "@mui/material";
import darkTheme from "../darkTheme";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useEffect, useState} from "react";
import VacancyCard from "./VacancyCard";

function Vacancies() {
    const [vacancies, setVacancies] = useState([]);
    useEffect(() => {
        console.log(process.env.REACT_APP_BACKEND_URL);
        fetchVacancies();
    }, []);

    const fetchVacancies = async () => {
        const response = await fetch(`http://45.12.75.100:5000/vacancy/vacancies`);
        const vacanciesData = await response.json();
        setVacancies(vacanciesData);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container maxWidth={"lg"}>
                <Typography variant="h4" mt={4} align='left' gutterBottom>
                    Наши вакансии
                </Typography>
                <Typography variant="subtitle1" align="left" gutterBottom>
                    Здесь вы можете узнать о доступных вакансиях в нашу компанию. Мы предлагаем различные вакансии, которые помогут вам реализовать ваш потенциал и построить успешную карьеру.
                </Typography>

                <Typography variant="subtitle1" align="left" gutterBottom>
                    Связаться с нами:
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                    <MailIcon />
                    <Typography sx={{ ml: 1 }}>office@npo-gradient.ru</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                    <PhoneIcon />
                    <Typography sx={{ ml: 1 }}>+7 (8442) 60 55 30</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                    <LocationOnIcon />
                    <Typography sx={{ ml: 1 }}>400001, г. Волгоград, ул. Канунникова, 6/1, помещение 1 Город: Волгоград</Typography>
                </Box>

            </Container>
            <Grid container spacing={3}>
                {vacancies.length > 0
                    ? vacancies.map((vacancy, index) => (
                        <Grid item xs={12} key={index}>
                            <VacancyCard vacancy={vacancy} isEditable={false} />
                        </Grid>
                    ))
                    : <Grid item xs={12} style={{marginTop: 20}} container justifyContent="center">
                        <Typography variant="h6" align='center' gutterBottom>
                            К сожалению, пока у нас нет доступных вакансий
                        </Typography>
                    </Grid>
                }
            </Grid>
        </ThemeProvider>
    );
}
export default Vacancies