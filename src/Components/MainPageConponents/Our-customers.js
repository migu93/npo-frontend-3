import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import company1 from '../../images/CompanyLogos/Gazprom-Logo-rus.svg.png'
import company2 from '../../images/CompanyLogos/EuroHim.png'
import company3 from '../../images/CompanyLogos/Zarubneft_logo.png'
import company4 from '../../images/CompanyLogos/LUK_OIL_Logo_kyr.svg.png'
import company5 from '../../images/CompanyLogos/Томскнефть.png'
import company6 from '../../images/CompanyLogos/РН-Ставропольнефтегаз.png'
import company7 from '../../images/CompanyLogos/gazpromneft_logo.png'
const logos = [
    { imgPath: company1, label: 'Company 1' },
    { imgPath: company2, label: 'Company 2' },
    { imgPath: company3, label: 'Company 3' },
    { imgPath: company4, label: 'Company 4' },
    { imgPath: company5, label: 'Company 5' },
    { imgPath: company6, label: 'Company 6' },
    { imgPath: company7, label: 'Company 6' },
];
const OurCustomers = () => {
    return (
        <Box sx={{ width: '100%', padding: '32px 0' }}>
            <Typography variant="h4" py={5} align="center" gutterBottom>
                Наши заказчики
            </Typography>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                {logos.map((logo, index) => (
                    <Grid key={index} item xs={6} sm={4} md={3}>
                        <Box
                            component="img"
                            sx={{
                                maxHeight: 100,
                                display: 'block',
                                maxWidth: '100%',
                                overflow: 'hidden',
                                width: '320',
                                margin: '0 auto',
                            }}
                            src={logo.imgPath}
                            alt={logo.label}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};


export default OurCustomers;