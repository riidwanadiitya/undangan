import React, { Component } from 'react';
import { Container, Header, Card, Icon } from 'semantic-ui-react';
import Axios from 'axios';

export class Terimakasih extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData: []
        };
    };

    reloadData = () => {
        Axios.get('http://localhost:4000/ucapan-doa')
            .then(res => {
                console.log(res.data)
                this.setState({
                    mainData: res.data
                })
            })
    };

    componentDidMount() {
        this.reloadData();
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Terimakasih
