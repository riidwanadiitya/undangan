import React, { Component } from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';

import '../App.css';

export class Gallery extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header as='h2'>Gallery</Header>
                    <Container>
                        <Grid>
                            <Grid.Row columns={3} style={{ marginTop: 20 }}>
                                <Grid.Column>
                                    <Image src="http://localhost:3000/testing.jpg" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src="http://localhost:3000/testing.jpg" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src="http://localhost:3000/testing.jpg" />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={3} >
                                <Grid.Column>
                                    <Image src="http://localhost:3000/testing2.jpg" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src="http://localhost:3000/testing2.jpg" />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src="http://localhost:3000/testing2.jpg" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Container>

            </div>
        )
    }
}

export default Gallery
