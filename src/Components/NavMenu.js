import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton, Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {useState} from "react";
import {headerLinks} from '../utils/routes'
import logo from '../images/CompanyLogos/NPO-Logo for navMenu.svg'

function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href="/">
                    </a>
                    <Button component={RouterLink} to={'/'} color="inherit" variant="text" onClick={handleCloseNavMenu}>
                        <img alt={'Логотип компании'} src={logo} sx={{marginLeft: 10}} width={85}/>
                    </Button>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, mx: 5, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="medium"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {headerLinks.map((link) => (
                                <MenuItem key={link.path} onClick={handleCloseNavMenu}>
                                    <Button component={RouterLink} to={link.path} color="inherit" variant="text" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{link.name}</Typography>
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box marginLeft={5} sx={{ flexGrow: 1, gap: 3, display: { xs: 'none', md: 'flex' } }}>
                        {headerLinks.map((page) => (
                            <Button component={RouterLink} to={page.path} color="inherit" variant="text">
                                <Typography textAlign="center">{page.name}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}


export default ResponsiveAppBar
