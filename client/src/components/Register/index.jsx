import React, { useState } from 'react'
import { registerUser } from '../../services/axios'
import { TextField, Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './register.css'

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        if (!formData.fullName) {
            setError('Full Name is required');
            return false;
        }
        if (formData.fullName.length < 2) {
            setError('Full Name must be at least 2 characters long');
            return false;
        }

        // const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,})+$/;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.[a-zA-Z]{2,})+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            setError('Please provide a valid email');
            return false;
        }
    
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (!formData.password) {
            setError('Password is required');
            return false;
        }
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return false;
        }
        if (!passwordRegex.test(formData.password)) {
            setError('Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character');
            return false;
        }
    
        setError('');
        return true;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return

        try {
            const response = await registerUser(formData.email, formData.fullName, formData.password)
            setSuccess(response.message)
            setFormData({ email: '', fullName: '', password: '' })
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.')
        }
    }

    return (
        <div className="register-container">
            <Box component="form" display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography variant="h5" gutterBottom color="white">Register</Typography>
                <TextField
                    label="Email"
                    type="email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ input: { color: 'black' }, label: { color: 'white' }, backgroundColor: '#444' }}
                />
                <TextField
                    label="Full Name"
                    type="text"
                    name="fullName"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formData.fullName}
                    onChange={handleChange}
                    sx={{ input: { color: 'black' }, label: { color: 'white' }, backgroundColor: '#444' }}
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
                    sx={{ input: { color: 'black' }, label: { color: 'white' }, backgroundColor: '#444' }}
                />
                {error && <Typography variant="body1" color="error" mt={2}>{error}</Typography>}
                {success && <Typography variant="body1" color="green" mt={2}>{success}</Typography>}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                    sx={{ backgroundColor: '#800000', color: 'white', '&:hover': { backgroundColor: '#b30000' } }}
                >
                    Register
                </Button>
            </Box>
        </div>
    )
}

export default Register
