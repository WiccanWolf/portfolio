import { useEffect, useState } from 'react';
import funFacts from '../facts.json';
import { Button } from 'react-bootstrap';

const Homepage = () => {
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
      <h1 style={{ marginTop: '1rem' }}>Homepage</h1>
      <img style={{ filter: 'blur(3px)' }} src='src/assets/testSuite.jpeg' />
      <div class='centered'>Wiccan Wolf</div>
      <div className='fact-randomiser'>
        <p>{funFacts[fact]}</p>
      </div>
      <Button variant='outline-dark' onClick={handleRandomise}>
        New fact!
      </Button>
    </>
  );
};

export default Homepage;
