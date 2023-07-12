import {Grid, Typography, List, ListItem, ListItemText, Link,} from "@mui/material";
import Carousel2 from "./Carousel2";
import React from "react";
import Box from "@mui/material/Box";
import pdf1 from '../../documents/lic1.pdf'
import pdf2 from '../../documents/gos-taina.pdf'
import pdf3 from '../../documents/opred-vid-rabot.pdf'
import pdf4 from '../../documents/thopographic_lic.pdf'
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    marginY: {
        textAlign: 'justify',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

export default function Certificates() {

    const classes = useStyles();
    return (
        <div>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Сертификаты и Лицензии
                        </Typography>
                        <Box>
                            <Typography style={{marginBottom: '10px', display: 'block'}}>
                                <span className="first-line" style={{marginLeft: '25px'}}>Для проведения различных видов работ и обеспечения высокого качества услуг, компания имеет в своем распоряжении все необходимые лицензии, сертификаты и разрешительные документы.</span>                            </Typography>
                            <Typography style={{marginBottom: '10px', display: 'block'}}>
                                <span className="first-line" style={{marginLeft: '25px'}}>Это подтверждает соответствие наших специалистов требованиям законодательства, а также демонстрирует профессионализм и ответственность компании перед своими клиентами.</span>
                            </Typography>
                            <Typography style={{display: 'block'}}>
                                <span className="first-line" style={{marginLeft: '25px'}}>Для организации работ компания обладает следующим перечнем лицензий и сертификатов:</span>
                            </Typography>
                        </Box>
                                <List>
                                    <ListItem disableGutters>
                                        <ListItemText>
                                            <Link href={pdf1} target="_blank" rel="noopener noreferrer">
                                                <span>лицензией на производство маркшейдерских работ;</span>
                                            </Link>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemText>
                                            <Link href={pdf2} target="_blank" rel="noopener noreferrer">
                                                лицензией на осуществление геодезической и картографической деятельностью;
                                            </Link>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemText>
                                            <Link href={pdf3} target="_blank" rel="noopener noreferrer">
                                                лицензией на проведение работ с использованием сведений, составляющих государственную тайну;                                    </Link>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem disableGutters>
                                        <ListItemText>
                                            <Link href={pdf4} target="_blank" rel="noopener noreferrer">
                                                свидетельством о допуске к определенному виду или видам работ, которые оказывают влияние на безопасность объектов капитального строительства.
                                            </Link>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <Carousel2 />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
