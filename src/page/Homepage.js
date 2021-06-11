import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment } from 'semantic-ui-react';
import '../App.css'

export class App extends Component {
    render() {
        return (
            <div className="App bg-home">
                <Segment style={{ marginRight: 50, marginLeft: 50, backgroundColor: 'transparent' }}>
                    <Container >

                        <Header as='h3' style={{ color: 'white' }}>You're Invited to</Header>
                        <Header as='h2' style={{ marginTop: 10, color: 'white' }}>The Wedding Of</Header>

                        <Header as='h1' style={{ marginTop: 100 }}>Andita</Header>
                        <Header as='h1' style={{ marginTop: 20, marginBottom: 20 }}>&</Header>
                        <Header as='h1' style={{ marginBottom: 100 }}>Ridwan</Header>
                    </Container>
                    <Container >
                        <Header as="h4" style={{ color: 'white' }}>dear,</Header>
                        <Header as="h2" style={{ color: 'white' }}>Ucok & Partner</Header>
                        <Button positive as={Link} to='/undangan'>Buka Undangan</Button>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default App
