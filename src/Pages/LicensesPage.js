import React from 'react';
import { Grid, Card, CardMedia, CardActionArea } from '@material-ui/core';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import lic1 from '../../src/images/licenses/лицензия 1.jpg';
import lic2 from '../../src/images/licenses/лицензия 2.jpg';
import lic3 from '../../src/images/licenses/лицензия 3.jpg';
import lic4 from '../../src/images/licenses/лилцензия 4.jpg';
import pdf1 from '../../src/documents/lic1.pdf'
import pdf2 from '../../src/documents/gos-taina.pdf'
import pdf3 from '../../src/documents/opred-vid-rabot.pdf'
import pdf4 from '../../src/documents/thopographic_lic.pdf'
import CardContent from "@mui/material/CardContent";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

function LicencesPage() {
    const licenses = [
        {image: lic1, pdf: pdf1, description: 'Лицензия на производство маркшейдерских работ'},
        {image: lic3, pdf: pdf2, description: 'Лицензия на проведение работ с использованием сведений, составляющих государственную тайну;'},
        {image: lic2, pdf: pdf4, description: 'Лицензией на осуществление геодезической и картографической деятельности;'},
        {image: lic4, pdf: pdf3, description: 'Свидетельство о допуске к определенному виду или видам работ, которые оказывают влияние на безопасность объектов капитального строительства.'},
    ];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container>
            <Typography variant="h4" mt={4} align='left' gutterBottom>
                Лицензии
            </Typography>
            <Typography mb={5}>
                Компания оснащена всеми необходимыми лицензиями и сертификатами для выполнения своей деятельности, что обеспечивает законность и качество проводимых работ.
            </Typography>
            <Grid container spacing={3}>
                {licenses.map((license, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box display="flex" justifyContent="center">
                            <CardActionArea style={{maxWidth: isMobile ? 300 : 'auto', marginTop: 20}}
                                            onClick={() => window.open(license.pdf, '_blank')}>
                                <CardMedia
                                    component="img"
                                    alt={`License ${index+1}`}
                                    image={license.image}
                                    title={`License ${index+1}`}
                                />
                            </CardActionArea>
                        </Box>
                        <CardContent>
                            <Typography variant="body2" color="black" align="center" component="p">
                                {license.description}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default LicencesPage;
