import React, { useState } from 'react';
import {Button, TextField, Container, Typography, Box, ThemeProvider} from '@mui/material';
import {createTheme} from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import axios from 'axios';


function AdminAuth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_AUTH_URL}`, {
                username: username,
                password: password
            });

            if(response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/admin-panel');
            } else {
                setError(true);
            }
        } catch(error) {
            setError(true);
        }
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#3f51b5',
                black: '#000000'
            },
        },
    });

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs">
                <Box sx={{ mt: 8, mb: 4 }}>
                    <Typography component="h1" variant="h5">
                        Аутентификация в админ панель
                    </Typography>
                    {error && <Alert severity="error">Неправильный логин или пароль</Alert>}
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Логин"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: "#000000", color: "#fff" }}
                            sx={{ mt: 3, mb: 2 }}>Войти</Button>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default AdminAuth;
