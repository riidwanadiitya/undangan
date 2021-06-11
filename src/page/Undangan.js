import React, { Component } from 'react';
import '../App.css'
import Date from '../components/Date';
import Gallery from '../components/Gallery';
import Mempelai from '../components/Mempelai';
import Prokes from '../components/Prokes';
import Story from '../components/Story';
import Ucapan from '../components/Ucapan';

export class Undangan extends Component {
    render() {
        return (
            <div className="App" style={{ marginTop: 30 }}>
                {/* Andita Ridwan */}
                <Mempelai />
                {/* Date */}
                <Date />
                {/* Gallery */}
                <Gallery />
                {/* Story */}
                <Story />
                {/* Protokol Kesehatan */}
                <Prokes />
                {/* Ucapan dan Doa */}
                <Ucapan />

            </div >

        )
    }
}

export default Undangan
