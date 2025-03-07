import { Card } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card className='project-grid'>
      <a style={{ textDecoration: 'none' }} href={project.html_url}>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {project.name.toUpperCase()}
          </Card.Title>
          <Card.Text style={{ color: 'black' }}>
            {project.description}
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
};

export default ProjectCard;
