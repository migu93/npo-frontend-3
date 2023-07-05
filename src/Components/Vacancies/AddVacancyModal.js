import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton,
    List,
    ListItem, ListItemSecondaryAction,
    ListItemText,
    TextField,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import {makeStyles} from "@material-ui/core/styles";
import darkTheme from "../darkTheme";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
    customScrollbar: {
        '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
        },
        overflow: 'auto', // This is important
        maxHeight: '80vh', // Adjust this value as per your need
    },
    customMargins: {
        marginTop: darkTheme.spacing(2),
        marginBottom: darkTheme.spacing(2),
    },
});

const theme = createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: 'white',
                    },
                },
            },
        },
    },
    palette: {
        mode: 'dark',
        // другие настройки палитры...
    },
});

export default function AddVacancyModal({
                                            open,
                                            onClose,
                                            form,
                                            handleInputChange,
                                            handleSubmit,
                                            handleAddResponsibility,
                                            handleRemoveResponsibility,
                                            isEditing
                                        }) {
    const classes = useStyles();

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{isEditing ? 'Редактирование вакансии' : 'Добавление вакансии'}</DialogTitle>
            <DialogContent className={classes.customScrollbar}>
               <ThemeProvider theme={theme}>
                   <TextField
                       autoFocus
                       margin="dense"
                       id="title"
                       label="Заголовок"
                       type="text"
                       fullWidth
                       value={form.title}
                       onChange={(event) => handleInputChange(event, 'title')}
                   />
                   <TextField
                       margin="dense"
                       id="salaryMin"
                       label="Зарплата от"
                       type="number"
                       fullWidth
                       value={form.salary.min}
                       onChange={(event) => handleInputChange(event, 'salary.min')}
                       InputProps={{
                           inputProps: {
                               style: {
                                   "-moz-appearance": "textfield",
                                   "appearance": "textfield",
                                   "margin": 0
                               }
                           }
                       }}
                   />
                   <TextField
                       margin="dense"
                       id="salaryMax"
                       label="Зарплата до"
                       type="number"
                       fullWidth
                       value={form.salary.max}
                       onChange={(event) => handleInputChange(event, 'salary.max')}
                       InputProps={{
                           inputProps: {
                               style: {
                                   "-moz-appearance": "textfield",
                                   "appearance": "textfield",
                                   "margin": 0
                               }
                           }
                       }}
                   />
                   <TextField
                       margin="dense"
                       id="requirements"
                       label="Требования"
                       type="text"
                       fullWidth
                       value={form.requirements}
                       onChange={(event) => handleInputChange(event, 'requirements')}
                   />
               </ThemeProvider>
                <Button
                    className={classes.customMargins}
                    sx={{marginTop: 1}}
                    endIcon={<AddIcon />}
                    color="primary"
                    variant={'contained'}
                    onClick={handleAddResponsibility}>
                    Обязанности</Button>
                <List>
                    {form.responsibilities.map((responsibility, index) => (
                        <ListItem key={index}>
                            <ListItemText>
                                <TextField
                                    fullWidth
                                    value={responsibility}
                                    onChange={(event) => handleInputChange(event, `responsibilities.${index}`)}
                                />
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="remove" onClick={() => handleRemoveResponsibility(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>

                <TextField
                    margin="dense"
                    id="description"
                    label="Описание вакансии"
                    type="text"
                    fullWidth
                    rows={2}
                    multiline
                    rowsMax={5}
                    value={form.description}
                    onChange={(event) => handleInputChange(event, 'description')}
                />
            </DialogContent>
            <DialogActions>
                <Button variant={'contained'} onClick={handleSubmit} color="success">{isEditing ? 'Сохранить' : 'Добавить'}</Button>
                <Button variant={'contained'}  onClick={onClose} color="primary">Отмена</Button>
            </DialogActions>
        </Dialog>
    );
}
