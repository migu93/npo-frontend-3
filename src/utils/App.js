import React from 'react';
import { ThemeProvider } from '@mui/material';
import darkTheme from '../Components/darkTheme';
import NavMenu from '../Components/NavMenu';
import {Navigate, Route, Routes} from 'react-router-dom';
import Footer from '../Components/Footer';
import { routes } from './routes';
import ScrollTopButton from "../Components/ScrollTopButton";

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <NavMenu />
            <ScrollTopButton />
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
