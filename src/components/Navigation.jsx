import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = ({ darkMode }) => {
  return (
    <AppBar
      position='static'
      sx={{
        bgcolor: darkMode ? 'black' : '#FDF6C3',
        color: 'text.primary',
        boxShadow: darkMode ? 'none' : '0px 4px 10px rgba(0,0,0,0.1)',
        padding: '0.5rem',
      }}
    >
      <Toolbar>
        <Typography variant='h6' xs={{ flexGrow: 1 }}>
          <Button component={Link} to='/' sx={{ color: 'text.primary' }}>
            Home
          </Button>
        </Typography>
        <Box>
          <Button
            component={Link}
            to='/projects'
            sx={{ color: 'text.primary' }}
          >
            Projects
          </Button>
          <Button component={Link} to='/aboutme' sx={{ color: 'text.primary' }}>
            About Me
          </Button>
          <Button component={Link} to='/contact' sx={{ color: 'text.primary' }}>
            Contact Me
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

/**<Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/aboutme'>About Me</Nav.Link>
            <Nav.Link href='/contact'>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */
