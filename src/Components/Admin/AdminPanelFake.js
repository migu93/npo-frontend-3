import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Button,
    Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import VacancyCard from "../Vacancies/VacancyCard";
import AddVacancyModal from "../Vacancies/AddVacancyModal";
import Typography from "@mui/material/Typography";
import EmailSettings from "./EmailSettings";


function AdminPanelFake() {
    const [isEditing, setIsEditing] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [openDialog, setOpenDialog] = useState(false);
    const [editingVacancy, setEditingVacancy] = useState(null);
    const handleDialogOpen = (vacancy) => {
        if (vacancy === null) {
            // Open dialog for new vacancy
            setIsEditing(false); // You're not editing, you're adding a new vacancy
            setVacancyForm({
                title: '',
                salary: {
                    min: '',
                    max: ''
                },
                requirements: '',
                responsibilities: [],
                description: '', // If you have a description field in your form
            });
        } else {
            // Open dialog for editing existing vacancy
            setIsEditing(true); // You're editing an existing vacancy
            setVacancyForm({
                title: vacancy.title,
                salary: {
                    min: vacancy.salary.min,
                    max: vacancy.salary.max
                },
                requirements: vacancy.requirements,
                responsibilities: vacancy.responsibilities,
                description: vacancy.description, // Include this if your form also has a field for 'description'
            });
            setEditingVacancy(vacancy);
        }
        setOpenDialog(true);
    };
    const handleAddResponsibility = () => {
        setVacancyForm({
            ...vacancyForm,
            responsibilities: [...vacancyForm.responsibilities, ''] // Add a new blank responsibility
        });
    };
    const handleRemoveResponsibility = (index) => {
        setVacancyForm({
            ...vacancyForm,
            responsibilities: vacancyForm.responsibilities.filter((_, i) => i !== index) // Remove the specified responsibility
        });
    };
    const handleDelete = async (vacancyId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/vacancy/vacancies-delete/${vacancyId}`,
                {
                    headers: { 'Authorization': 'Bearer ' + token }
                });
            toast.success('Вакансия успешно удалена!');
            fetchVacancies();
        } catch (error) {
            toast.error('Ошибка при удалении вакансии');
            console.error("Error deleting vacancy: ", error);
        }
    };

    const [vacancyForm, setVacancyForm] = useState({
        title: '',
        salary: {
            min: '',
            max: ''
        },
        requirements: '',
        responsibilities: [],
    });

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleInputChange = (event, field) => {
        if (field.includes('responsibilities')) {
            // Handle responsibilities array
            const index = Number(field.split('.')[1]);
            const newResponsibilities = [...vacancyForm.responsibilities];
            newResponsibilities[index] = event.target.value;

            setVacancyForm({
                ...vacancyForm,
                responsibilities: newResponsibilities
            });
        } else if (field.includes('.')) {
            // Handle nested properties, e.g. 'salary.min'
            const [fieldParent, fieldChild] = field.split('.');
            setVacancyForm({
                ...vacancyForm,
                [fieldParent]: {
                    ...vacancyForm[fieldParent],
                    [fieldChild]: event.target.value
                }
            });
        } else {
            // Handle non-nested properties
            setVacancyForm({
                ...vacancyForm,
                [field]: event.target.value
            });
        }
    };

    const handleEditSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(
                `${process.env.REACT_APP_BACKEND_URL}/vacancy/vacancies-update/${editingVacancy._id}`,
                vacancyForm,
                {
                    headers: { 'Authorization': 'Bearer ' + token }
                }
            );
            toast.success('Вакансия успешно обновлена!');
            fetchVacancies();
            handleDialogClose();
        } catch (error) {
            toast.error('Ошибка при обновлении вакансии');
            console.error("Error updating vacancy: ", error);
        }
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');  // Get the token from local storage
            if (isEditing) {
                await axios.patch(
                    `${process.env.REACT_APP_BACKEND_URL}/vacancy/vacancies/${editingVacancy._id}`,
                    vacancyForm,
                    {
                        headers: { 'Authorization': 'Bearer ' + token }  // Include the token in the Authorization header
                    }
                );
                toast.success('Вакансия успешно отредактирована!');
            } else {
                await axios.post(
                    `${process.env.REACT_APP_BACKEND_URL}/vacancy/vacancies-create`,
                    vacancyForm,
                    {
                        headers: { 'Authorization': 'Bearer ' + token }  // Include the token in the Authorization header
                    }
                );
                toast.success('Вакансия успешно добавлена!');
            }
            fetchVacancies();
            handleDialogClose();
        } catch (error) {
            toast.error(isEditing ? 'Ошибка при редактировании вакансии' : 'Ошибка при добавлении вакансии');
            console.error("Ошибка добавления или редактирования вакансии: ", error);
        }
    };


    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        fetchVacancies();
    }, []);

    const fetchVacancies = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/vacancy/vacancies`);
            setVacancies(response.data);
        } catch (error) {
            console.error("Ошибка при выборке данных: ", error);
        }
    };
    if (isLoading) {
        return (
            <Container>
                <Typography variant="h4" mt={4} align='left' gutterBottom>
                    Админ панель
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{height: 50, alignItems: 'center'}}
                            sx={{py: 2}}
                            startIcon={<AddIcon />}
                            onClick={() => handleDialogOpen(null)}>
                            Добавить вакансию
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <EmailSettings/>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    {vacancies.map((vacancy, index) => (
                        <Grid item xs={12} key={index}>
                            <VacancyCard vacancy={vacancy} handleDialogOpen={handleDialogOpen} handleDelete={handleDelete} isEditable={true}/>
                        </Grid>
                    ))}
                </Grid>
                <AddVacancyModal
                    open={openDialog}
                    onClose={handleDialogClose}
                    form={vacancyForm}
                    handleInputChange={handleInputChange}
                    isEditing={isEditing}
                    handleSubmit={editingVacancy ? handleEditSubmit : handleSubmit}
                    handleAddResponsibility={handleAddResponsibility}
                    handleRemoveResponsibility={handleRemoveResponsibility}
                />
                <ToastContainer />
            </Container>
        );
    }

}

export default AdminPanelFake;