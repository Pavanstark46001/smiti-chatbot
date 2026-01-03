import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, MenuItem, Snackbar, Alert, Table, TableBody, TableCell, TableRow } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        email: false,
        phone: false,
        message: false
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhone(formData.phone);
        const isMessageValid = formData.message.trim() !== '';

        if (!isEmailValid || !isPhoneValid || !isMessageValid) {
            setErrors({
                email: !isEmailValid,
                phone: !isPhoneValid,
                message: !isMessageValid
            });
            return;
        }

        const subject = encodeURIComponent(`Appointment Request: ${formData.subject}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:gowthampatel024@gmail.com?subject=${subject}&body=${body}`;
        setFormData({
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });
        setErrors({
            email: false,
            phone: false,
            message: false
        });
        setSuccess(true);
    };

    const handleClose = () => {
        setSuccess(false);
    };

    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            mb: 4,
                            mt: -5
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 1, color: '#49754c' }}>
                            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', mb: 1 }}>
                                <Box
                                    component="span"
                                    sx={{
                                        display: 'inline-block',
                                        width: 24,
                                        height: 24,
                                        bgcolor: '#49754c',
                                        borderRadius: '50%',
                                        mr: 1,
                                    }}
                                />
                                Contact Us!
                            </Box>
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Got Questions? Let's Connect!
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                            We’d love to hear from you! Whether you have a question, need a quote, or want to discuss your construction project, our team is here to help.
                        </Typography>
                    </Box>
                    {/* Table layout for the form fields */}
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        fullWidth
                                        label="Enter Your Name"
                                        variant="outlined"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        fullWidth
                                        label="Enter Your Email"
                                        variant="outlined"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        helperText={errors.email ? 'Please enter a valid Gmail address.' : ''}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Select Service"
                                        variant="outlined"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="Interior">Interior</MenuItem>
                                        <MenuItem value="Construction">Construction</MenuItem>
                                        <MenuItem value="Renovation">Renovation</MenuItem>
                                        <MenuItem value="Residencial">Residencial</MenuItem>
                                        <MenuItem value="Commercial">Commercial</MenuItem>
                                        <MenuItem value="Ongoing">Ongoing</MenuItem>

                                    </TextField>
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        variant="outlined"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        error={errors.phone}
                                        helperText={errors.phone ? 'Please enter a valid 10-digit phone number.' : ''}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <TextField
                                        fullWidth
                                        label="Write Your Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={errors.message}
                                        helperText={errors.message ? 'Message cannot be empty.' : ''}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                            sx={{
                                mt: 3,
                                background: '#303940', // Corrected syntax
                                borderRadius: '30px',
                                '&:hover': {
                                    backgroundColor: '#004e6a',
                                },
                            }}
                            onClick={handleSubmit}
                        >
                            Make an Appointment
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ marginTop: '80px', paddingLeft: { md: '20px', xs: '-5px' } }}>
                        <iframe
                            src=" https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.122184233261!2d77.488513!3d12.935907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c1b889eaaab%3A0xc5425e09a8a17dc0!2sSmiti%20Construction!5e0!3m2!1sen!2sus!4v1767425086059!5m2!1sen!2sus"
                            width="120%"
                            height="550"
                            style={{ border: 0, borderRadius: '10px' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', top: 20 }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>

        </Container>
    );
};

export default ContactForm;
