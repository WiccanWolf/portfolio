import { useEffect, useState } from 'react';
import funFacts from '../facts.json';
import { Button } from '@mui/material';

const Homepage = ({ darkMode }) => {
  const keys = Object.keys(funFacts);
  const getRandomKey = (currentKey) => {
    const availableKyes = keys.filter((key) => key !== currentKey);
    return availableKyes[Math.floor(Math.random() * availableKyes.length)];
  };

  const [fact, setFact] = useState(keys[0]);

  const handleRandomise = () => {
    setFact(getRandomKey(fact));
  };

  return (
    <>
      <title>Homepage</title>
      <h1 className='centered-text' style={{ marginTop: '1rem' }}>
        Homepage
      </h1>
      <div className='centered-text'>
        <p>{funFacts[fact]}</p>
      </div>
      <Button
        className='centered-button'
        variant='contained'
        sx={{
          bgcolor: darkMode ? '#191813' : '#FDF6C3',
          color: darkMode ? '#FDF6C3' : '#191813',
          '&:hover': { bgcolor: darkMode ? '#191813' : '#FDF6C3' },
        }}
        onClick={handleRandomise}
      >
        New fact!
      </Button>
    </>
  );
};

export default Homepage;
