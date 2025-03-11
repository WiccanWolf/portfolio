import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';
import ThankYou from './components/ThankYou';
import Loading from './components/Loading';
import AboutMe from './components/AboutMe';
import React, { useState } from 'react';
import { Box, Switch, ThemeProvider, createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material';

// const baseURL = 'https://wiccanwolfportfolio.netlify.app/';

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: { main: '#FDF6C3' },
      secondary: { main: '#131052' },
      background: { default: toggleDarkMode ? '#121212' : '#FFF9C4' },
      paper: toggleDarkMode ? '1E1E1E' : '#FFFFE0',
    },
    text: { primary: toggleDarkMode ? '#ffffff' : '#000000' },
  });

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box
            sx={{
              bgcolor: 'background.default',
              minHeight: '100vh',
              color: 'text.primary',
            }}
          >
            <label>Toggle Dark Mode</label>
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
            <Box
              component='nav'
              sx={{ bgcolor: 'background.paper', color: 'text.primary', p: 2 }}
            >
              <Navigation darkMode={toggleDarkMode} />
            </Box>
            <Routes>
              <Route
                path={`/`}
                element={<Homepage darkMode={toggleDarkMode} />}
              />
              <Route path={`/projects`} element={<Projects />} />
              <Route path={`/aboutme`} element={<AboutMe />} />
              <Route path={`/contact`} element={<ContactForm />} />
              <Route path={`/thanks`} element={<ThankYou />} />
              <Route path='test' element={<Loading />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
