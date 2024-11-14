import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import jobPortalImage from './job_portal.png';

const HomePage = () => {

    const buttonStyle = {
        mt: 2,
        color: 'white',
        backgroundColor: 'maroon',
        borderColor: 'maroon',
        '&:hover': { backgroundColor: 'red', color: 'white' },
    };

    return (
        <Container sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', py: 4 }}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt={4}>
                <Box flex={1}>
                    <Typography variant="h2" gutterBottom color="white">Welcome to the Job Portal</Typography>
                    <Typography variant="h6" color="white" paragraph>
                        Discover your dream job or showcase your company to top talent. Our platform is designed
                        to help job seekers and employers connect seamlessly.
                    </Typography>
                    <Button
                        variant="outlined"
                        component={Link}
                        to="/jobs"
                        sx={buttonStyle}
                    >
                        Explore Jobs
                    </Button>
                </Box>
                <Box flex={1} display="flex" justifyContent="center">
                    <img src={jobPortalImage} alt="illustration" style={{ width: '100%', maxWidth: '400px' }} />
                </Box>
            </Box>

            <Box mt={6}>
                <Typography variant="h4" align="center" gutterBottom color="white">What We Offer</Typography>
                <Grid container spacing={4} mt={2}>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, backgroundColor: 'black', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Job Listings
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Browse thousands of job opportunities across different sectors and apply for roles that fit you best.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    to="/jobs"
                                    sx={buttonStyle}
                                >
                                    View Jobs
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, backgroundColor: 'black', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Company Showcase
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Explore profiles of top companies and find the right environment to kickstart your career.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    to="/companies"
                                    sx={buttonStyle}
                                >
                                    Explore Companies
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, backgroundColor: 'black', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Get in Touch
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Have questions? Contact us for more information or support with your job search.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    component={Link}
                                    to="/contact"
                                    sx={buttonStyle}
                                >
                                    Contact Us
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default HomePage;
