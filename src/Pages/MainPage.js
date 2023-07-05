import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MainPageExpirienceBlock from "../Components/MainPageConponents/MainPageExpirienceBlock";
import AboutCompanyShort from "../Components/MainPageConponents/AboutCompanyShort";
import Certificates from "../Components/MainPageConponents/SerteficationsBlock";
import Customers from "../Components/MainPageConponents/Our-customers";
import logo from '../images/CompanyLogos/NPO-Logo.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
function MainPage() {
    const matches = useMediaQuery('(max-width:780px)');
    return (
        <>
            <Box color={'black'} sx={{py: 8 }}>
                <Container maxWidth="lg">
                    <Box display="flex" flexDirection={matches ? 'column' : 'row'} alignItems="center" justifyContent={"center"}>
                        <img
                            src={logo}
                            width={420}
                            alt="Logo"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                marginRight: matches ? '0px' : '24px'  // adjust this value as needed
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            <MainPageExpirienceBlock/>
            <Container>
                <AboutCompanyShort/>
                <Certificates/>
                <Customers/>
            </Container>
        </>
    );
}

export default MainPage;