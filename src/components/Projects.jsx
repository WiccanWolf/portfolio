import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://api.github.com/users/WiccanWolf/repos')
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error retrieving GitHub repos: ', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    <Loading />;
  }

  if (error) {
    return (
      <p className='boring-textx'>
        Failed to load repositories. Please try again later.
      </p>
    );
  }

  return (
    <>
      <title>Projects</title>
      <h1 style={{ marginTop: '1rem' }}>Projects</h1>
      <ul className='project-grid'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </>
  );
};

export default Projects;
