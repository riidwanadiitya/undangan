import React, { Component } from 'react';
import { Container, Header, Segment, Image } from 'semantic-ui-react';

import raisa from '../images/raisa.jpg';
import hamish from '../images/hamish.jpg';

import '../App.css'

export class Mempelai extends Component {
    render() {
        return (
            <div>
                <Container style={{ paddingBottom: 100, paddingTop: 30 }}>
                    <Header as='h1' style={{ color: 'white' }}>ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
                    <br /></Header>
                    <Header as='h4' style={{ color: 'white' }}>Bismillahirrahmanirrahim, Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.<br />
                    Ya Allah semoga Ridho-Mu tercurah mengiringi pernikahan putra-putri kami:</Header>
                    <Container>
                        <Segment style={{ backgroundColor: 'transparent' }}>
                            <Header as='h2' textAlign='center'>
                                <Image circular style={{ height: 200, width: 150 }} src={raisa} />
                            </Header>
                            <Header as="h1" style={{ color: 'orange' }}> Raisa </Header>
                            <p style={{ marginTop: -15 }}>Putri pertama dari Bapak Dedi Pramono</p>
                            <Header as="h1" style={{ fontSize: 80, color: 'orange' }} >&</Header>
                            <Header as='h2' textAlign='center'>
                                <Image circular style={{ height: 200, width: 150 }} src={hamish} />
                            </Header>
                            <Header as="h1" style={{ color: 'orange' }} > Hamish </Header>
                            <p style={{ marginTop: -15 }}>Putra pertama dari Bapak Imam Sudrajat</p>
                        </Segment>
                    </Container>

                    <Header as='h5' style={{ color: 'white' }}>"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tentram kepadanya, dan dijadikannya di antaramu rasa kasih dan sayang. Sesungguhnya pada uang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir". <br />
                        <br />- QS. Ar-Rum : 21 -</Header>
                </Container>

            </div>
        )
    }
}

export default Mempelai
