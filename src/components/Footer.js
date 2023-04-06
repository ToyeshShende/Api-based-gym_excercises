import React from 'react';
import { Box,Typography } from '@mui/material';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography varient="h5" >  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Typography>  
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '30px' } }} mt="41px" textAlign="center" pb="40px">Sigma GYM</Typography>
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Toyesh</Typography>
  </Box>
);

export default Footer;