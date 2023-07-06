import React, { useState, useEffect } from "react";
import heroBay from "./assets/heroBay.jpg";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { GiCrab } from "react-icons/gi";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const marylandFacts = [
  {
    factNumber: 1,
    fact: "Maryland is known as the 'Free State.'",
  },
  {
    factNumber: 2,
    fact: "The state of Maryland is named after Queen Henrietta Maria, the wife of King Charles I of England.",
  },
  {
    factNumber: 3,
    fact: "Annapolis, the capital of Maryland, served as the capital of the United States from 1783 to 1784.",
  },
  {
    factNumber: 4,
    fact: "Maryland is home to the United States Naval Academy, located in Annapolis.",
  },
  {
    factNumber: 5,
    fact: "The Chesapeake Bay, located in Maryland, is the largest estuary in the United States.",
  },
  {
    factNumber: 6,
    fact: "The Maryland state flag features the colors red, white, black, and gold.",
  },
  {
    factNumber: 7,
    fact: "The Baltimore and Ohio Railroad, which began operations in 1830, was the first railroad in the United States.",
  },
  {
    factNumber: 8,
    fact: "Maryland is known for its blue crabs and crab cakes.",
  },
  {
    factNumber: 9,
    fact: "The National Aquarium in Baltimore is home to more than 20,000 animals.",
  },
  {
    factNumber: 10,
    fact: "The Star-Spangled Banner, the national anthem of the United States, was written by Francis Scott Key during the War of 1812 in Baltimore.",
  },
  {
    factNumber: 11,
    fact: "Maryland is known for its rich history and is home to numerous historic sites, including Fort McHenry, Antietam National Battlefield, and Harpers Ferry National Historical Park.",
  },
  {
    factNumber: 12,
    fact: "Maryland is a major center for the biotechnology industry, with many biotech companies and research institutions located in the state.",
  },
  {
    factNumber: 13,
    fact: "The state sport of Maryland is jousting, a form of medieval combat on horseback.",
  },
  {
    factNumber: 14,
    fact: "Ocean City, Maryland, is a popular beach destination known for its boardwalk, amusement parks, and seafood restaurants.",
  },
  {
    factNumber: 15,
    fact: "Maryland is home to the Fort McHenry National Monument and Historic Shrine, which inspired the writing of the national anthem.",
  },
  {
    factNumber: 16,
    fact: "The Chesapeake and Ohio Canal, located in Maryland, was built in the 19th century and served as a transportation route for coal and other goods.",
  },
  {
    factNumber: 17,
    fact: "Maryland is known for its vibrant arts scene, with numerous theaters, art galleries, and music venues throughout the state.",
  },
  {
    factNumber: 18,
    fact: "The Baltimore Ravens, an NFL team, and the Baltimore Orioles, a Major League Baseball team, are based in Maryland.",
  },
  {
    factNumber: 19,
    fact: "The University of Maryland, College Park is the flagship campus of the University System of Maryland and is known for its strong academic programs and research.",
  },
  {
    factNumber: 20,
    fact: "Maryland is home to the NASA Goddard Space Flight Center, which conducts research and development in the field of space and Earth sciences.",
  },
  // Rest of the facts...
];

function Home() {
  


   
  const [open, setOpen] = useState(false);
  const [currentFact, setCurrentFact] = useState(null);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showRandomFact = () => {
    const randomFact = marylandFacts[Math.floor(Math.random() * marylandFacts.length)];
    setCurrentFact(randomFact);
  };

  useEffect(() => {
    showRandomFact();

    const interval = setInterval(showRandomFact, 5000);

    return () => clearInterval(interval);
  }, []);


    


  return (
    <Box>
      <img
        src={heroBay}
        style={{ opacity: ".4", position: "absolute", zIndex: "-999" }}
        alt=""
      />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        backgroundColor={"rgb(25, 118, 210, .6)"}
        pb={2}
      >
        <Typography
          fontFamily={'Ubuntu'}
          textAlign={'center'}
          variant="h3"
          fontSize={'1.5rem'}
          color={"orange"}
          mt={1}
          sx={{
            fontWeight: 'bold',
            opacity: '1',
            zIndex: '1',
          }}
        >
          Chesapeake Bay Edition
        </Typography>
        <Box>
          <Typography
            textAlign={'center'}
            color={'white'}
            fontFamily={'Ubuntu'}
            mt={1}
            p={1}
            pb={0}
          >
            Below, you will find 3 activities that will help you save the bay! Click{' '}
            <span className="span">'Single Player'</span> if you want to play a fun game by yourself,{' '}
            <span className="span">'Multiplayer'</span> for a Bingo style search game, or{' '}
            <span className="span">'Quiz'</span> if you think you are ready to show off your Maryland knowledge!
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'orange', borderRadius: '20px', mb: 2, mt: 2 }}
          onClick={handleOpen}
        >
          For Parents
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <Box sx={style}>
            <Typography fontFamily={'Ubuntu'} id="modal-modal-title" variant="h6" component="h2">
              Disclaimer:
            </Typography>
            <Typography fontFamily={'Ubuntu'} id="modal-modal-description" sx={{ mt: 2 }}>
              This application is safe for children of all ages and requires no login or personal info to participate. Rest easy knowing that good wholesome fun still exists! Feel free to subscribe below to get updates!
            </Typography>
          </Box>
        </Modal>
        <form action="">
          <Stack
          direction={"row"}
          spacing={2}
          >
          <TextField variant="filled"  label="Enter Email to Subscribe!" InputLabelProps={{ sx: { color: 'orange' } }}   />
          <Button
          variant="contained" sx={{ backgroundColor: 'orange', borderRadius: '20px', mb: 2, mt: 2 }}
          >Submit</Button>
          </Stack>
        </form>
       
     

      </Box>

   
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={5}
      >
        <Link
          to="/single"
        >
        <Button
        
      
          sx={{ backgroundColor: 'orange', borderRadius: '20px',height: 50,  width: '200px', mt: 2 }}
          variant="contained"
        >
          <Typography fontWeight={'bold'} fontFamily={'Ubuntu'}>
            Single Player
          </Typography>
        </Button>
        </Link>
        <Link
        to="/multi"
        >
        <Button
          sx={{ backgroundColor: 'orange', borderRadius: '20px', width: '200px', mt: 2, height: 50, }}
          variant="contained"
        >
          <Typography fontWeight={'bold'} fontFamily={'Ubuntu'}>
            Multiplayer
          </Typography>
        </Button>
        </Link>
       
        <Button
          sx={{ backgroundColor: 'orange', borderRadius: '20px',height: 50, width: '200px', mt: 2 }}
          variant="contained"
        >
          <Typography fontWeight={'bold'} fontFamily={'Ubuntu'}>
            Quiz
          </Typography>
        </Button>
        
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        bgcolor={'rgb(25, 118, 210, .8)'}
        mt={5}
        height={'fit-content'}
      >
        {currentFact && (
          <>
            <Typography
            color={'orange'} variant="h5"
            mb={1}
            p={1}
            fontWeight={'bold'}
            fontFamily={'Ubuntu'}
            >{`Maryland Fact #${currentFact.factNumber}`}</Typography>
            <GiCrab color="red" fontSize={50} />
            <Typography
            fontFamily={'Ubuntu'}
            p={1}
            color={'white'}
            textAlign={'center'}
            >{currentFact.fact}</Typography>
          </>
        )}
        
      </Box>
     
      </Box>
    
  );
}

export default Home;
