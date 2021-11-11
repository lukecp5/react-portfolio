import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Project = (props) => {
      const project = props.project;
      return (
                  <Card>
                        <Card.Img variant="top" src={require('./' + project.image).default} alt={project.name} className="img-fluid rounded-circle"/>
                        <Card.Body className="mx-auto">
                              <Card.Title>{project.name.toString()}</Card.Title>
                              {/* <Card.Text>
                                    {project.description}
                              </Card.Text> */}
                        </Card.Body>
                        <Card.Footer className="m-auto">
                              <Button variant="primary p-1 p-sm-2" href={project.live}>Live Demo</Button>
                              <Button variant="secondary p-1 p-sm-2" href={project.github}>GitHub Repo</Button>
                        </Card.Footer>
                  </Card>   
                 )}

export default Project;
