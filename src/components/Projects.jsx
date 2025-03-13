import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/WiccanWolf/repos'
        );
        setProjects(response.data);
      } catch (error) {
        console.error('Error retrieving projects: ', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
      <h1 className='centered-text' style={{ marginTop: '1rem' }}>
        Projects
      </h1>
      {loading ? <Loading /> : ''}
      <ul className='project-grid'>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ul>
    </>
  );
};

export default Projects;
