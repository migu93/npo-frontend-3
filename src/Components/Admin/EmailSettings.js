import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {createTheme} from "@mui/material/styles";
import {Box, InputBase, ThemeProvider} from "@mui/material";
import {toast} from "react-toastify";

const EmailSettings = () => {
    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [emailId, setEmailId] = useState(''); // Добавляем переменную emailId


    useEffect(() => {
        getEmail();
    }, []);

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '& fieldset': {
                            borderColor: 'black',
                        },
                    },
                },
            },
        },
    });

    const getEmail = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/email/get-email`);
            const emails = response.data; // Получаем массив объектов
            if (emails.length > 0) {
                const firstEmail = emails[0]; // Получаем первый объект из массива
                setEmail(firstEmail.email); // Получаем свойство email из первого объекта
                setEmailId(firstEmail._id); // Устанавливаем значение emailId
            }
        } catch (error) {
            console.error('Error retrieving email:', error);
        }
    };

    const handleSaveEmail = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}/email/update-email/${emailId}`, { email: newEmail });
            getEmail();
            setNewEmail('');
            toast.success('Email успешно обновлён');
        } catch (error) {
            console.error('Error updating email:', error);
            toast.error('Ошибка при обновлении email');
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box display={'flex'} >
                <div>
                    <TextField
                        variant="outlined"
                        label="Текущий email писем обратной связи"
                        value={email}
                        disabled
                        fullWidth
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        variant="outlined"
                        label="Новый email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        fullWidth
                    />
                    <Button style={{background: 'black', marginTop: 10}} variant="contained" onClick={handleSaveEmail}>
                        Сохранить
                    </Button>
                </div>
            </Box>
        </ThemeProvider>
    );
};

export default EmailSettings;
