import React, { useState, useEffect } from "react";
import './App.css';
import { getStory } from './Service.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkPreview } from '@dhaiwat10/react-link-preview';

function Story({storyId}) {
    const [story, setStory] = useState({});
    useEffect(() => { 
        getStory(storyId).then(data => setStory(data));
    }, [storyId]);
    const fallback = <>
        <Card>
            <Card.Img variant="top" src="./dark-placeholder.png"/>
            <Card.Body>
                <Card.Text>
                    Could not load preview.
                </Card.Text>
            </Card.Body>
        </Card> 
        </>
    return story && story.url ? <>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                {story.title}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LinkPreview url={story.url} width='auto' height='auto' fallback={fallback} />
                            <br />
                            <Card.Text>                             
                                by <b>{story.by}</b> - {Date(story.time*1000)}
                            </Card.Text>
                            <Button variant="primary" href={story.url}>Read the full story</Button>
                        </Card.Body>
                    </Card>
                    <br />
                </> : null
}
export default Story;