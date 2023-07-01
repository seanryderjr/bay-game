import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import logoConv from "./assets/conv (2).png";


export default function Footer() {
    return (
       <Box
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
       flexDirection={'row'}
       bgcolor={"primary.main"}
       height={40}
       position={"fixed"}
       bottom={0}
       width={"100%"}
       
       >

           <Typography
           color={"white"}
           fontFamily={'Ubuntu'}
           alignSelf={"center"}
           
           >
            &copy; 2023 
           </Typography>
           <a href="https://convergenceui.com">
           <img style={{transform: 'translateY(2px)'}} width={250} src={logoConv} alt="" />
           </a>
        </Box>
    );
}