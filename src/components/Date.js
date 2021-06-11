import React, { Component } from 'react';
import { Container, Header, Segment, Icon, Button, Divider } from 'semantic-ui-react';
import '../App.css';

export class Date extends Component {
    render() {
        return (
            <div>
                <Container style={{ backgroundColor: 'white', paddingBottom: 50, marginBottom: 30 }} fluid>
                    <Header as='h2' textAlign='center' style={{ color: 'orange', marginBottom: 50, paddingTop: 20 }}>
                        Save The Date
                    </Header>
                    <Container style={{ marginBottom: 50 }}>
                        <Segment textAlign='center' style={{ paddingBottom: 30 }}>
                            <Header as='h3'>Akad Pernikahan</Header>
                            <Divider fitted style={{ marginBottom: 40 }} />
                            <p><Icon name='calendar outline' /> 11 Maret 2022 </p>
                            <p><Icon name='clock outline' /> 09.00 WIB </p>
                            <p><Icon name='address book outline' /> Masjid </p>
                            <Button>
                                <Icon name='map marker alternate' />Maps
                            </Button>
                        </Segment>
                    </Container>
                    <Container style={{ marginBottom: 50 }}>
                        <Segment textAlign='center' style={{ paddingBottom: 30 }}>
                            <Header as='h3'>Resepsi Pernikahan</Header>
                            <Divider fitted style={{ marginBottom: 40 }} />
                            <p><Icon name='calendar outline' /> 11 Maret 2022 </p>
                            <p><Icon name='clock outline' /> 09.00 WIB - 11.30 WIB </p>
                            <p><Icon name='address book outline' /> Kediaman Mempelai Wanita </p>
                            <Button>
                                <Icon name='map marker alternate' />Maps
                            </Button>
                        </Segment>
                    </Container>
                    <Header as='h2' >Turut mengundang:</Header>
                    <p style={{ fontSize: 15, marginTop: -10 }}>Keluarga besar Imam Sudrajat.
                    <br /> Keluarga Besar Dedi Pramono.</p>
                </Container>

            </div>
        )
    }
}

export default Date
