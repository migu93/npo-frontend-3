import {Grid} from "@material-ui/core";
import {Box, Container , ThemeProvider, Typography} from "@mui/material";
import darkTheme from "../darkTheme";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VacancyCard from "./VacancyCard";


const vacancies = [];
/* Пример вакансии
const vacancies = [
    {
        title: "Front-End Developer",
        salary: {
            min: 50000,
            max: 80000
        },
        requirements: "Experience with HTML, CSS, and JavaScript",
        responsibilities: [
            "Developing user-facing features",
            "Building reusable code and libraries",
            "Optimizing application for maximum speed and scalability",
            "Collaborating with back-end developers and designers"
        ],
        description: "We are seeking a talented Front-End Developer to join our dynamic team. As a Front-End Developer, you will be responsible for implementing visual elements that users see and interact with in a web application. You will work closely with back-end developers and UI/UX designers to ensure the application is visually appealing and user-friendly."
    },
    {
        title: "Back-End Developer",
        salary: {
            min: 60000,
            max: 90000
        },
        requirements: "Experience with Node.js and database management",
        responsibilities: [
            "Developing server-side logic",
            "Designing and implementing data storage solutions",
            "Integrating with external APIs",
            "Collaborating with front-end developers on application features"
        ],
        description: "We are looking for a skilled Back-End Developer to join our team. As a Back-End Developer, you will be responsible for designing and implementing server-side logic, ensuring high performance and responsiveness of our applications. You will work closely with front-end developers to integrate user-facing elements with server-side logic."
    },
    // Дополнительные вакансии...
];
 */


function Vacancies() {
    /* Это был запрос вакансий с back-end
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
     */

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
            <Grid container spacing={3} style={{marginBottom: '70px'}}>
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