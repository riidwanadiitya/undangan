import React, { Component } from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react';

import raisa from '../images/raisa.jpg';
import hamish from '../images/hamish.jpg';

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
                                    <Image src={hamish} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={hamish} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={hamish} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={3} >
                                <Grid.Column>
                                    <Image src={raisa} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={raisa} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={raisa} />
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
