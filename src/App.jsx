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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation className='navbar' />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/thanks' element={<ThankYou />} />
          <Route path='test' element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
