import {Box, Button, Container, Grid, List, ListItem, ListItemText, Typography} from '@mui/material';
import {useTheme} from "@mui/material/styles";
import { headerLinks } from "../utils/routes";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Link, Link as RouterLink} from 'react-router-dom';
import logo from "../images/CompanyLogos/NPO-Logo for navMenu.svg";
import {makeStyles} from "@material-ui/core/styles";
import ScrollToTop from "../utils/ScrollToTop";

const useStyles = makeStyles({
    marginTop: {
        marginTop: "20px"
    },
    link: {
        color: 'white',
        '&:hover': {
            color: '#D2171B',
        },
    },
});
export default function Footer() {
    const classes = useStyles();

    const theme = useTheme();
    return (
        <Box
            mt={5}
            sx={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                padding: '32px 0',
                borderTop: '1px solid #444',
            }}
        >
            <Container maxWidth="lg">
                <Grid container justifyContent={"center"}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography align={'center'} variant="h6" gutterBottom>
                            Контакты
                        </Typography>
                        <Typography display={'block'}>400001, г. Волгоград, ул. Канунникова, 6/1, помещение 1</Typography>
                        <Typography display={'block'}>Город: Волгоград</Typography>
                        <Typography display={'block'} mt={2}>+7 (8442) 60 55 30</Typography>
                        <Typography display={'block'}>office@npo-gradient.ru</Typography>
                    </Grid>
                    {
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography align={'center'} variant="h6" gutterBottom>
                            Навигация
                        </Typography>
                        <List>
                            <Grid container>
                                {headerLinks.map((link) => (
                                    <Grid item xs={6} key={link.path}>
                                        <ListItem className={classes.link}
                                                  onClick={() => window.scrollTo(0, 0)}
                                                  component={RouterLink} to={link.path}>
                                            <ListItemText primary={link.name} />
                                        </ListItem>
                                    </Grid>
                                ))}
                            </Grid>
                        </List>
                    </Grid>
                    }
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography align={'center'} variant="h6" gutterBottom>
                            Наши социальные сети
                        </Typography>
                        <Box  sx={{display: 'flex', gap: 4, justifyContent: 'center'}}>
                            <Link className={classes.link} href="htthps://telegram.org">
                                <TelegramIcon />
                            </Link>
                            <Link className={classes.link} href="https://www.whatsapp.com">
                                <WhatsAppIcon />
                            </Link>
                            <Link className={classes.link} href="https://mail.ru">
                                <MailOutlineIcon />
                            </Link>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'center'}} mt={3}>
                            <Button component={RouterLink} to={'/'} onClick={() => window.scrollTo(0, 0)} to={'/'}>
                                <img
                                    align={'center'}
                                    src={logo}
                                    width={200}
                                    alt="Logo"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}/>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
