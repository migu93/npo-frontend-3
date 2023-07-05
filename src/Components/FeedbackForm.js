import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {toast, ToastContainer} from "react-toastify";

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    submitButton: {
        marginTop: theme.spacing(2),
        backgroundColor: '#000000',
        color: '#fff',
        transition: 'background-color 0.3s ease-out', // Adding transition effect
        '&:hover': {
            backgroundColor: '#333333', // Lighter color when hovering
        }
    },
}));

const FeedbackForm = () => {
    const [lastSubmitted, setLastSubmitted] = useState(null);
    const classes = useStyles();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    useEffect(() => {
        let timer;
        // If form is submitted, set a timeout of 1 minute
        if (lastSubmitted) {
            const timeLeft = 60000 - (Date.now() - lastSubmitted);
            if (timeLeft > 0) {
                timer = setTimeout(() => setLastSubmitted(null), timeLeft);
            } else {
                setLastSubmitted(null);
            }
        }

        // Clean up the timeout when the component is unmounted or when `lastSubmitted` changes
        return () => clearTimeout(timer);
    }, [lastSubmitted]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleContactChange = (event) => {
        setContact(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if it's been at least 1 minute since the last submission
        if (lastSubmitted && Date.now() - lastSubmitted < 60000) {
            const secondsLeft = Math.ceil((60000 - (Date.now() - lastSubmitted)) / 1000);
            toast.error(`Пожалуйста, подождите еще ${secondsLeft} секунд перед отправкой новой заявки.`);
            return;
        }

        event.preventDefault();

        // Validate form fields
        if (name.trim() === '' || contact.trim() === '') {
            toast.error('Пожалуйста, заполните все поля формы');
            return;
        }
        setLastSubmitted(Date.now());
        // Perform form submission
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, contact }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Clear form fields
            setName('');
            setContact('');

            // Show success notification
            toast.success('Заявка успешно отправлена');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Ошибка при отправке заявки');
        }
    };


    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                label="Ваше имя"
                value={name}
                onChange={handleNameChange}
                className={classes.textField}
                margin="normal"
                variant={'outlined'}
            />

            <TextField
                label="Телефон или email"
                value={contact}
                onChange={handleContactChange}
                className={classes.textField}
                margin="normal"
                variant={'outlined'}

            />

            <Button type="submit"  variant="contained"
                    style={{ backgroundColor: "#000000", color: "#fff" }}
                    sx={{ mt: 3, mb: 2 }} className={classes.submitButton}>
                Оставить заявку
            </Button>
            <ToastContainer/>
        </form>
    );
};

export default FeedbackForm;
