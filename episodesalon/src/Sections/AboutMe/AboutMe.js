import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Steffon from "../../Assests/Steffon.png"
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import './AboutMe.styles.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AboutMe() {
  return (
    <div className='.aboutme'  >

    {/* <Box sx={{  width:"100%"}}>
      <Grid container spacing={2}    alignItems="center" justifyContent="center" >
        <Grid item xs={12} sm={3} >
          <Item sx ={{ minHeight: '358px', minWidth:'285px', maxHeight:'600px', maxWidth:'400px'}}>
            <Avatar alt="Profile Picture" src={Steffon} sx={{ width: '100%', height: 'auto', borderRadius:2 }} />
          </Item>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Item sx={{ height: '100%' ,  minHeight: '358px' ,maxWidth:'400px'}}>
            <Typography variant="h4" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
            At Episode Salon, our highly skilled creative team provides a variety of hair care services to help you look and feel your best. We offer free consultations with each cut and color service to ensure we meet your style goals. Our services include highlights, all-over color, keratin treatments, hair extensions, and more. Contact us today to book your appointment and meet with one of our exceptional stylists             </Typography>

          </Item>
        </Grid>
      </Grid>
    </Box> */}

{/* 
        <h1>About us</h1>

        <p>
        We are a full-service salon offering haircuts,
         coloring, and styling services. 
         Our experienced stylists use high-quality products to ensure your hair looks its best.
        </p>

        <p>
        At Episode Salon, our highly skilled creative team provides a variety of hair care services to help you look and feel your best. We offer free consultations with each cut and color service to ensure we meet your style goals. Our services include highlights, all-over color, keratin treatments, hair extensions, and more. Contact us today to book your appointment and meet with one of our exceptional stylists 
        </p> */}

    </div>
  )
}
