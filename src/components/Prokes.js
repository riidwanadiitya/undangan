import React, { Component } from 'react';
import { Container, Segment, Header, Icon, Grid, } from 'semantic-ui-react';

import '../App.css';

export class Prokes extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{ backgroundColor: 'white', paddingTop: 60, marginBottom: 50, paddingBottom: 50 }} textAlign='center'>
                    <Container>
                        <Segment>
                            <Header as='h2' >
                                <Icon name="tags" />Protokol Kesehatan
                            </Header>
                            <p>Untuk mematuhi himbauan pemerintah dalam pencegahan penyebaran COVID-19, maka diharapkan Bapak/Ibu/Saudara/i untuk:</p>
                            <Segment placeholder>
                                <Grid columns={2} stackable textAlign='center'>


                                    <Grid.Row verticalAlign='middle'>
                                        <Grid.Column>
                                            <Header icon>
                                                <Icon name='world' />
                                            1. Mencuci Tangan dengan Sabun
                                        </Header>
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header icon>
                                                <Icon name='world' />
                                            2. Menggunakan Masker
                                        </Header>
                                        </Grid.Column>

                                        <Grid.Column>
                                            <Header icon>
                                                <Icon name='world' />
                                            3. Jaga Jarak
                                        </Header>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>

                        </Segment>
                    </Container>
                </Container>


            </div>
        )
    }
}

export default Prokes
