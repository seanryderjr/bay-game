import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import Modal from "@mui/material/Modal";

const style = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Nav() {
 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "DriveMDgame.com",
        text: "Check out DriveMDgame.com",
        url: "https://drivemdgame.com"
      });
      console.log("Shared successfully");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"primary.main"}
      width={"100vw"}
    >
      <Button onClick={handleShare}>
        <ShareIcon sx={{ color: "orange" }} />
      </Button>
        
      <Typography fontWeight={"bold"} color={"white"} fontFamily={'Walter Turncoat'}>
        DriveMDgame.com
      </Typography>

      <Button onClick={handleOpen}>
        <InfoIcon sx={{ color: "orange" }} />
      </Button>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily={'Walter Turncoat'}>
      About the game...
    </Typography>
    <Typography fontFamily={'Ubuntu'} id="modal-modal-description" sx={{ mt: 2 }}>
      A long, long time ago... I, as a child would make this trek with my family. After years of boredom and sibling fighting, the state came out with The Bay Game. This game changed the way we as children traveled! It kept us busy and always aware of the marvels around us. Since the termination of the game, I have taken it upon myself to get with the times and design a new game that you can play on your phone! So here we are... 30 years after the original, adjusting to the times of the web! Enjoy and drive safely!
    </Typography>
  </Box>
</Modal>
    </Box>
  );
}

export default Nav;
