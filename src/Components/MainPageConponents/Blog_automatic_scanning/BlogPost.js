import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import darkTheme from '../../darkTheme';

const BlogPost = ({ title, content, imageUrl, date }) => {
    const theme = darkTheme;

    const renderContent = (contentItem) => {
        switch (contentItem.type) {
            case 'paragraph':
                return (
                    <Typography my={2} variant="body1" component="p">
                        {contentItem.text}
                    </Typography>
                );
            case 'subheading':
                return (
                    <Typography my={3} variant="h6" component="h2" gutterBottom>
                        {contentItem.text}
                    </Typography>
                );
            case 'image':
                return (
                    <Box my={2} textAlign="center">
                        <img src={contentItem.url} alt={contentItem.alt} style={{ width: '70%', height: 'auto' }} />
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="md">
            <Box>
                <Typography mt={2} variant="h4" component="h1" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" color={theme.palette.primary.main}>
                    Published on {date}
                </Typography>
                <Box my={2}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} textAlign="center">
                            <img src={imageUrl} alt={title} style={{ width: '70%', height: 'auto' }} />
                        </Grid>
                        <Grid item xs={12}>
                            {content.map((contentItem, index) => (
                                <Box key={index}>
                                    <Typography align="justify">
                                        {renderContent(contentItem)}
                                    </Typography>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default BlogPost;
