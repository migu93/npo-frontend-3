import React from "react";
import Typography from "@material-ui/core/Typography";

const NotFoundPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Страница не найдена
            </Typography>
            <Typography variant="body1">
                К сожалению, данной страницы не существует.
            </Typography>
        </div>
    );
};

export default NotFoundPage;
