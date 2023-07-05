import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea} from '@mui/material';
import {Link} from "react-router-dom";

const ActionAreaCard = ({title, description, imageUrl, altText, path}) => {
    return (
        <Card sx={{ maxWidth: 355 }}>
            <CardActionArea component={Link} to={path}>
                <CardMedia
                    component="img"
                    height="160"
                    image={imageUrl}
                    alt={altText}
                />
                <Box
                    component={CardContent}
                    sx={{
                        height: 50,
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography gutterBottom variant="h6" fontSize={16} fontWeight={'bold'} component="div">
                        {title}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    );
}
export default ActionAreaCard;