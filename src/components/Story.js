import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

import '../App.css'

export class Story extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{ backgroundColor: 'white', marginTop: 50, paddingTop: 30, paddingBottom: 50 }} textAlign='center'>
                    <Header as='h2' style={{ color: 'orange' }}>Our Story</Header>
                    <Container>
                        <Segment placeholder style={{ backgroundColor: 'grey' }}></Segment>
                        <Segment placeholder style={{ backgroundColor: 'grey' }}></Segment>
                        <Segment placeholder style={{ backgroundColor: 'grey' }}></Segment>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Story
