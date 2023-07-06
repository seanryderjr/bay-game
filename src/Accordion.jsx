import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function SimpleAccordion() {
  return (
    <div>
    <div>
      <Accordion
        sx={{
            bgcolor: 'rgb(25, 118, 210, .8)',
        }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',

          }}
        >
          <Avatar
          sx={{
              bgcolor: 'orange',
          }}
          >
            <Typography
            fontFamily={'Ubuntu'}
            fontWeight={'bold'}
            color={'white'}
            fontSize={'20px'}
            >
                S
            </Typography>
          </Avatar>
          <Typography
          fontFamily={'Ubuntu'}
          alignSelf={'center'}
          color={'white'}
          fontSize={'20px'}
          ml={1}

          >Bridges</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl sx={{alignItems: 'flex-end', display: 'flex'}}  component="fieldset">
      <FormGroup  aria-label="position" column>
      <FormControlLabel
          value="end"
          control={<Checkbox  sx={{ color: 'orange' }} color='default' />}
          label="Chesapeake Bay Bridge"
          labelPlacement="end"
          
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: '500',
          }}
        />
        <FormControlLabel
          value="end"
          control={<Checkbox sx={{ color: 'orange' }} color='default' />}
          label="Kent Island Narrows Bridge"
          labelPlacement="end"
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
          }}
        />
        <FormControlLabel
          value="end"
          control={<Checkbox sx={{ color: 'orange' }} color='default' />}
          label="Nanticoke River Bridge"
          labelPlacement="end"
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
          }}
        />
        <FormControlLabel
          value="end"
          control={<Checkbox sx={{ color: 'orange' }} color='default' />}
          label="Harry W. Kelley Bridge"
          labelPlacement="end"
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
          }}
        />
      </FormGroup>
    </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={{
        bgcolor: 'rgb(25, 118, 210, .8)',
    }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar
           sx={{
            bgcolor: 'orange',
        }}
          >
            <Typography
             fontFamily={'Ubuntu'}
             fontWeight={'bold'}
             color={'white'}
             fontSize={'20px'}
            >
                A
            </Typography>
          </Avatar>
          <Typography
          fontFamily={'Ubuntu'}
          alignSelf={'center'}
          color={'white'}
          fontSize={'20px'}

          ml={1}

          >Road Signs</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl sx={{alignItems: 'flex-end', display: 'flex'}}  component="fieldset">
      <FormGroup  aria-label="position" column>
      <FormControlLabel
          value="end"
          control={<Checkbox  sx={{ color: 'orange' }} color='default' />}
          label="Click it or Ticket"
          labelPlacement="end"
          
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: '500',
          }}
        />
        <FormControlLabel
          value="end"
          control={<Checkbox sx={{ color: 'orange' }} color='default' />}
          label="Sign thats says PHILADELPHIA"
          labelPlacement="end"
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
          }}
        />
        <FormControlLabel
          value="end"
          control={<Checkbox sx={{ color: 'orange' }} color='default' />}
          label="Nanticoke River Bridge"
          labelPlacement="end"
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
          }}
        />
        <FormControlLabel
          value="end"
          control={<Checkbox sx={{ color: 'orange' }} color='default' />}
          label="Harry W. Kelley Bridge"
          labelPlacement="end"
          sx={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
          }}
        />
      </FormGroup>
    </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={{
        bgcolor: 'rgb(25, 118, 210, .8)',
    }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar
           sx={{
            bgcolor: 'orange',
        }}
          >
            <Typography
             fontFamily={'Ubuntu'}
             fontWeight={'bold'}
             color={'white'}
             fontSize={'20px'}
            >
                V
            </Typography>
          </Avatar>
          <Typography
           fontFamily={'Ubuntu'}
           alignSelf={'center'}
           color={'white'}
           fontSize={'20px'}
           ml={1}

          >Vehicles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={{
        bgcolor: 'rgb(25, 118, 210, .8)',
    }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
         <Avatar
          sx={{
            bgcolor: 'orange',
        }}
         >
            <Typography
             fontFamily={'Ubuntu'}
             fontWeight={'bold'}
             color={'white'}
             fontSize={'20px'}
            >
                E
            </Typography>
          </Avatar>
          <Typography
           fontFamily={'Ubuntu'}
           color={'white'}
           fontSize={'20px'}
           alignSelf={'center'}
           ml={1}
          >Body of Water</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    <div
    
    style={{
        marginTop: '50px',
    }}>
    <div>
      <Accordion
        sx={{
            bgcolor: 'rgb(25, 118, 210, .8)',
        }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',

          }}
        >
          <Avatar>
            <Typography
            fontFamily={'Ubuntu'}
            fontWeight={'bold'}
            color={'white'}
            fontSize={'20px'}
            >
                T
            </Typography>
          </Avatar>
          <Typography
          fontFamily={'Ubuntu'}
          alignSelf={'center'}
          color={'white'}
          fontSize={'20px'}
          ml={1}

          >Local Businesses</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={{
        bgcolor: 'rgb(25, 118, 210, .8)',
    }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar>
            <Typography
             fontFamily={'Ubuntu'}
             fontWeight={'bold'}
             color={'white'}
             fontSize={'20px'}
            >
                H
            </Typography>
          </Avatar>
          <Typography
          fontFamily={'Ubuntu'}
          alignSelf={'center'}
          color={'white'}
          fontSize={'20px'}

          ml={1}

          >Billboards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={{
        bgcolor: 'rgb(25, 118, 210, .8)',
    }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar>
            <Typography
             fontFamily={'Ubuntu'}
             fontWeight={'bold'}
             color={'white'}
             fontSize={'20px'}
            >
                E
            </Typography>
          </Avatar>
          <Typography
           fontFamily={'Ubuntu'}
           alignSelf={'center'}
           color={'white'}
           fontSize={'20px'}
           ml={1}

          >Historic</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      
    </div>
    </div>
    <div
    
    style={{
        marginTop: '50px',
    }}>
    <div>
      <Accordion
        sx={{
            bgcolor: 'rgb(25, 118, 210, .8)',
        }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',

          }}
        >
          <Avatar>
            <Typography
            fontFamily={'Ubuntu'}
            fontWeight={'bold'}
            color={'white'}
            fontSize={'20px'}
            >
                B
            </Typography>
          </Avatar>
          <Typography
          fontFamily={'Ubuntu'}
          alignSelf={'center'}
          color={'white'}
          fontSize={'20px'}
          ml={1}

          >Potholes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={{
        bgcolor: 'rgb(25, 118, 210, .8)',
    }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar>
            <Typography
             fontFamily={'Ubuntu'}
             fontWeight={'bold'}
             color={'white'}
             fontSize={'20px'}
            >
                A
            </Typography>
          </Avatar>
          <Typography
          fontFamily={'Ubuntu'}
          alignSelf={'center'}
          color={'white'}
          fontSize={'20px'}

          ml={1}

          >Traffic Lights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={{
        bgcolor: 'rgb(25, 118, 210, .8)',
    }}      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar>
            <Typography
             fontFamily={'Ubuntu'}
             fontWeight={'bold'}
             color={'white'}
             fontSize={'20px'}
            >
                Y
            </Typography>
          </Avatar>
          <Typography
           fontFamily={'Ubuntu'}
           alignSelf={'center'}
           color={'white'}
           fontSize={'20px'}
           ml={1}

          >Animals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      
    </div>
    </div>
    </div>
  );
}