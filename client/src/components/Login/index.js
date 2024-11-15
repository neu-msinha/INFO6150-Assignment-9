import React, { useState } from 'react';
import { loginUser } from '../../services/axios';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (!username || !password) {
                setMessage('Please enter username and password');
                return;
            }

            const response = await loginUser(username, password);

            if (response.success) {
                localStorage.setItem('token', response.token);
                setMessage(response.message);
                navigate('/');
                window.location.reload();
            } else {
                setMessage('Login failed: ' + response.message);
            }
        } catch (error) {
            setMessage('Login error:', error);
        }
    }

    return (
        <div className="login-container">
            <Box component="form" display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography variant="h5" gutterBottom color="white">Login</Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ input: { color: 'black' }, label: { color: 'white' }, backgroundColor: '#444' }} // Lighter background
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ input: { color: 'black' }, label: { color: 'white' }, backgroundColor: '#444' }} // Lighter background
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={handleLogin}
                    sx={{ backgroundColor: '#800000', color: 'white', '&:hover': { backgroundColor: '#b30000' } }} // Maroon button with red hover
                >
                    Login
                </Button>
                <Typography variant="body1" color="error" mt={2}>{message}</Typography>
            </Box>
        </div>
    );
}

export default Login;
