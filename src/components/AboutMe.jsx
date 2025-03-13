import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

const AboutMe = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const homepageInfo = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/user/184265928'
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error loading User Info: ', error);
      } finally {
        setLoading(false);
      }
    };
    homepageInfo();
  }, []);

  const PersonalStatement =
    'Software Development and Code have always interested me. The excitement I feel when a code works as intended and tests are passed with bold green lines is honestly the best!';

  const Skills = {
    Language:
      'JavaScript; using Node.js and Visual Studio Code to approach and resolve issues.',
    Testing: 'Test Driven Development (TDD); Jest, Supertest, Playwright.',
    BackEnd: 'SQL, PSQL, seeding, migrations, NoSQL, servers, databases.',
    FrontEnd:
      'HTML, HTML5, CSS, React, Phaser, Lighthouse and other accessibility tools.',
    Hosting: 'GitHub, Cloudflare, Netlify',
    Other:
      'Paired Programming, technical communication, SDL, agile, and SCRUM methodologies.',
  };

  const Hobbies = {
    TTRPG:
      'An active member of a campaign each Thursday, as well as running two on alternating Sundays!',
    Writing:
      'I love creative writing, and often write small stories and games to spend time with loved ones.',
    Gaming:
      "A recent passtime of mine is to live stream myself playing a video game whilst voice acting for my friends. It's always a wonderful laugh!",
    Facts:
      "A few of my favourite facts are on the Homepage, but give me a nudge and I'll be happy to share some more!",
    Fixing:
      "Maybe it's because of my love of D&D and puzzle games, but problem solving is the most fun thing I tend to do in my everyday life.",
  };

  const ProfDev =
    'From October 2024 to January 2025, I underwent professional development with the Northcoders company, where I gained certification as a Junior Software Developer. Northcoders helped reignite my enjoyment of code, and I can only see myself improving and expanding as time goes on!';

  return (
    <>
      <title>About Me</title>
      <h1 className='centered-text' style={{ marginTop: '1rem' }}>
        About Me
      </h1>
      <h2 className='centered-text'>
        {userInfo.name} ~ {userInfo.login}
      </h2>
      {loading ? <Loading /> : ''}
      <img id='profile-pic' className='centered' src={userInfo.avatar_url} />
      <div style={{ margin: '1rem' }} className='grid-container'>
        <h3>Personal Statement</h3>
        <div class='grid-item'>{PersonalStatement}</div>
        <h3>Skills</h3>
        <div class='grid-item'>
          <ul>
            <li>
              <b>Languages: </b>
              {Skills.Language}
            </li>
            <li>
              <b>Testing: </b>
              {Skills.Testing}
            </li>
            <li>
              <b>Back-End: </b>
              {Skills.BackEnd}
            </li>
            <li>
              <b>Front-End: </b>
              {Skills.FrontEnd}
            </li>
            <li>
              <b>Hosting: </b>
              {Skills.Hosting}
            </li>
            <li>
              <b>Other: </b>
              {Skills.Other}
            </li>
          </ul>
        </div>
        <h3>Hobbies</h3>
        <div class='grid-item'>
          <ul>
            <li>
              <b>TTRPGs: </b>
              {Hobbies.TTRPG}
            </li>
            <li>
              <b>Creative Writing: </b>
              {Hobbies.Writing}
            </li>
            <li>
              <b>Gaming: </b>
              {Hobbies.Gaming}
            </li>
            <li>
              <b>Fun Facts: </b>
              {Hobbies.Facts}
            </li>
            <li>
              <b>Problem Solving: </b>
              {Hobbies.Fixing}
            </li>
          </ul>
        </div>
        <h3>Professional Development</h3>
        <div class='grid-item'>{ProfDev}</div>
      </div>
    </>
  );
};

export default AboutMe;
