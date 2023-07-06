import { Box, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import HeightIcon from '@mui/icons-material/Height';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import heroBay from './assets/heroBay.jpg';

const things = [
  'Osprey',
  'Construction Crew',
  'Bridge',
  'VA License',
  'Royal Farms',
  'Corn Field',
  'Rest Area',
  'Produce Stand',
  'Crab Bumper Sticker',
  'River',
  'Eagle',
  'Cows',
  'Barn',
  'Horse',
  'Fruit Sign',
  'Hotel Billboard',
  'Baseball Stadium',
  'Deer',
  'Fountain',
  'Lighthouse',
  'Sailboat',
  'Groundhog',
  'Beach',
  'Seagull',
  'Sunset',
  // ... add more items here
];

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const checkForWin = (selected) => {
  const winningCombinations = [
    // Horizontal combinations
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // Vertical combinations
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // Diagonal combinations
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c, d, e] = combination;
    if (
      selected[a] &&
      selected[b] &&
      selected[c] &&
      selected[d] &&
      selected[e]
    ) {
      return true;
    }
  }

  return false;
};

const GameBoard = () => {
  const [items, setItems] = useState(shuffle([...things]));
  const [selected, setSelected] = useState(Array(25).fill(false));
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (checkForWin(selected)) {
      setIsWinner(true);
    }
  }, [selected]);

  const handleSquareClick = (index) => {
    setSelected((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  const handleNewGameClick = () => {
    setItems(shuffle([...things]));
    setSelected(Array(25).fill(false));
    setIsWinner(false);
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      flexDirection={'column'}
      width={'100vw'}
      m={'0 auto'}
      maxWidth={'400px'}
      sx={{
        backgroundImage: `url(${heroBay})`,
        backgroundSize: 'fill',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100vh',
      }}
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        backgroundColor={'rgb(25, 118, 210, .8)'}
        pb={2}
      >
        <Typography
          fontFamily={'Ubuntu'}
          textAlign={'center'}
          variant="h3"
          fontSize={'1.5rem'}
          color={'orange'}
          mt={1}
          sx={{
            fontWeight: 'bold',
            opacity: '1',
            zIndex: '1',
          }}
        >
          6 In a Row!
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
            When you see an item in a box, click on it. If you connect 6 items
            in a row, you win! You can win by connecting 6 boxes{' '}
            <span className="span">Up and Down</span>{' '}
            <HeightIcon sx={{ transform: 'translateY(5px)' }} />,{' '}
            <span className="span">Side to Side</span>{' '}
            <CompareArrowsIcon sx={{ transform: 'translateY(5px)' }} />, or{' '}
            <span className="span">Diagonally!</span>{' '}
            <OpenInFullIcon sx={{ fontSize: '1rem' }} />
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridAutoRows: '1fr',
          width: '100%',
          margin: '0 auto',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: selected[index] ? 'orange' : '#ddd',
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '11px',
              width: '60px',
              height: '60px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid black',
              borderRadius: '5px',
              fontFamily: 'Ubuntu',
            }}
            onClick={() => handleSquareClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'orange', borderRadius: '20px', mb: 2, mt: 2 }}
        onClick={handleNewGameClick}
      >
        New Game
      </Button>
      {isWinner && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          flexDirection={'column'}
          
          zIndex={2}
        >
          <Typography
            variant="h3"
            color="white"
            fontFamily="Ubuntu"
            textAlign="center"
          >
            You Win!
          </Typography>
          <Button variant="contained" sx={{ mt: 2, bgcolor: 'orange' }} onClick={handleNewGameClick}>
            New Game
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GameBoard;
