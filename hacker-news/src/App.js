import React, { useState, useEffect } from "react";
import './App.css';
import { getStories } from './Service.js';
import Story from './Story';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';

function App() {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        getStories().then(data => setStories(data));
    }, []);

    return <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand> 
                        Hacker News Stories
                    </Navbar.Brand>
                </Container>
            </Navbar>           
            <Container style={{ maxWidth: '800px'}}>          
                <br />
                <Row>
                    <Col>
                        <Stack gap={1}>
                            {stories.map((story) => <Story storyId={story} key={story}/>)}
                        </Stack>                      
                    </Col>
                </Row>
            </Container>
        </>
}
export default App;