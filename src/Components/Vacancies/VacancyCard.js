import React, {useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    Typography,
    List,
    ListItem, DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog, Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listItem: {
        position: 'relative',
        listStyle: 'none',
        marginBottom: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        '&::before': {
            content: '"•"',
            position: 'absolute',
            left: 0,
            color: theme.palette.text.primary,
        },
    },
}));

function VacancyCard({ vacancy, handleDialogOpen, handleDelete, isEditable }) {
    const classes = useStyles();
    const [confirmOpen, setConfirmOpen] = useState(false);
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" fontWeight={'bold'} justifyContent={'center'} mb={3}>{vacancy.title}</Typography>
                <Typography my={2} variant="h6">Заработная плата: {vacancy.salary.min} - {vacancy.salary.max} ₽</Typography>
                <Typography my={2} variant="subtitle1">Описание: {vacancy.description}</Typography>
                <Typography my={2} variant="subtitle1">Требования: {vacancy.requirements}</Typography>
                <Typography my={2} variant="body1">Обязанности:</Typography>
                <List>
                    {vacancy.responsibilities.map((responsibility, i) => (
                        <ListItem key={i}>{responsibility}</ListItem>
                    ))}
                </List>

                {isEditable && (
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EditIcon />}
                            onClick={() => handleDialogOpen(vacancy)}
                        >
                            Редактировать
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => setConfirmOpen(true)}
                        >
                            Удалить
                        </Button>
                    </Box>
                )}
                <Dialog
                    open={confirmOpen}
                    onClose={() => setConfirmOpen(false)}
                >
                    <DialogTitle>Подтвердите удаление</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Вы действительно хотите удалить эту вакансию?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant={'contained'} color={'primary'} onClick={() => setConfirmOpen(false)}>Отмена</Button>
                        <Button variant={'contained'} color={'error'} onClick={() => {handleDelete(vacancy._id); setConfirmOpen(false);}}>Удалить</Button>
                    </DialogActions>
                </Dialog>
            </CardContent>
        </Card>
    );
}


export default VacancyCard;
