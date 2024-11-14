import React, { useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'
import './contact.css'

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData)
    }

    const buttonStyle = {
        mt: 2,
        color: 'white',
        backgroundColor: 'maroon',
        borderColor: 'maroon',
        '&:hover': { backgroundColor: 'red', color: 'white' },
    };

    return (
        <div className="contact-container">
            <Box className="contact-box" display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography variant="h4" className="contact-title">Contact Us</Typography>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        onChange={handleChange}
                        className="contact-input"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        onChange={handleChange}
                        className="contact-input"
                    />
                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={handleChange}
                        className="contact-input"
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth
                        className="contact-button"
                        type="submit"
                        sx={buttonStyle}
                    >
                        Send Message
                    </Button>
                </form>
            </Box>
        </div>
    )
}

export default Contact;
