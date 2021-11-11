import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Project = (props) => {
      const project = props.project;
      return (
                  <Card key={props.key}>
                        <Card.Img variant="top" src={project.image} alt={project.name} className="img-fluid rounded-circle"/>
                        <Card.Body>
                              <Card.Title>{project.name}</Card.Title>
                              {/* <Card.Text>
                                    {project.description}
                              </Card.Text> */}
                        </Card.Body>
                        <Card.Footer>
                              <Button variant="primary" href={project.live}>Live Demo</Button>
                              <Button variant="secondary" href={project.github}>GitHub Repo</Button>
                        </Card.Footer>
                  </Card>   
                 )}

export default Project;
