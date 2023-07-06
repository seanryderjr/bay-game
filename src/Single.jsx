import { Box, Typography, Button } from "@mui/material";
import React from "react";
import heroBay from "./assets/heroBay.jpg";
import Accordion from './Accordion'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextField } from "@mui/material";


function Single() {
    
  
    return (
        

        <Box
        className="hero"
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        >
            <img style={{opacity: '.6'}} src={heroBay} alt="" />
            <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            position={'absolute'}
            top={50}
            p={1}
            width={'90%'}
            backgroundColor={'rgb(25, 118, 210, .6)'}
            borderRadius={'10px'}
            boxShadow={'0 0 10px gray'}
           
            >
                <Typography
                fontFamily={'Ubuntu'}
                textAlign={'center'}
                color={'white'}
                mb={1}
                >
                    How to play: It's easy! Just <CheckCircleIcon sx={{ color: 'orange', transform: 'translateY(5px)' }} /> the items in each category. When you check off all of the items in a category, your letter will light up. Spell <span style={{color: 'orange', fontWeight: 'bold'}}>SAVE THE BAY</span>   and win!
                </Typography>
               
            </Box>
            <Box
            position={'absolute'}
            top={250}
            >

            <Accordion
            />
            </Box>
            </Box>
          
    )
}

export default Single