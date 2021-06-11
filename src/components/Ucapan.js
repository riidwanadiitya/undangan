import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Container, Form, Header, Icon, Table } from 'semantic-ui-react';

class Ucapan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData: [],
            edit: false,
            dataPost: {
                id: 0,
                name: "",
                ig: "",
                ucapan: "",
            }
        };
    };

    inputChange = (e) => {
        let newdataPost = { ...this.state.dataPost };

        if (this.state.edit === false) {
            newdataPost['id'] = new Date().getTime();
        }
        newdataPost[e.target.name] = e.target.value;
        this.setState({
            dataPost: newdataPost
        }, () => console.log(this.state.dataPost))
    };

    clearInputData = () => {
        let newdataPost = { ...this.state.dataPost };
        newdataPost['id'] = "";
        newdataPost['name'] = "";
        newdataPost['ig'] = "";
        newdataPost['ucapan'] = "";
        this.setState({
            dataPost: newdataPost
        })
    };

    reloadData = () => {
        axios('http://localhost:4000/ucapan-doa').then(res => {
            this.setState({
                mainData: res.data
            })
        });
    };

    handleSubmit = () => {
        if (this.state.edit === false) {
            axios.post(`http://localhost:4000/ucapan-doa`, this.state.dataPost)
                .then(() => {
                    this.reloadData();
                    this.clearInputData();
                })
        } else {
            axios.put(`http://localhost:4000/ucapan-doa/${this.state.dataPost.id}`, this.state.dataPost)
                .then(() => {
                    this.reloadData();
                    this.clearInputData();
                })
        }
    };

    handleRemove = (e) => {
        console.log(e.target.value);
        axios.delete(`http://localhost:4000/ucapan-doa/${e.target.value}`)
            .then(res => {
                this.reloadData();
                this.clearInputData();
            })
    };

    handleEdit = (e) => {
        console.log(e.target.value);
        axios.get(`http://localhost:4000/ucapan-doa/${e.target.value}`)
            .then(res => {
                this.setState({
                    dataPost: res.data,
                    edit: true
                });
            });

    };

    componentDidMount() {
        this.reloadData();
    };

    render() {
        return (
            <div>

                <Container fluid style={{ backgroundColor: 'white', marginTop: 50, paddingTop: 30, paddingBottom: 50 }} textAlign='center'>
                    <Header as='h2' style={{ color: 'orange', marginBottom: 50 }}>Ucapan dan Do'a</Header>


                    <Container>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input value={this.state.dataPost.name} onChange={this.inputChange} placeholder="Nama" name="name" />
                                <Form.Input value={this.state.dataPost.ig} onChange={this.inputChange} placeholder="Instagram" name="ig" />
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.TextArea value={this.state.dataPost.ucapan} onChange={this.inputChange} placeholder="Ucapan" name="ucapan" />
                            </Form.Group>
                            <Button primary fluid type="submit" onClick={this.handleSubmit}>Kirim Ucapan</Button>
                        </Form>
                    </Container>

                    <br /><br />

                    {this.state.mainData.map((dat, index) => {
                        return (
                            <div key={index}>

                                <Container style={{ display: "flex", justifyContent: "center", paddingBottom: "20px" }} >
                                    <Card.Group>
                                        <Card>
                                            <Card.Content style={{ textTransform: "capitalize" }}>
                                                <Card.Header textAlign="center">{dat.name}</Card.Header>
                                                <Card.Meta textAlign="center">{dat.ig}</Card.Meta>
                                                <Card.Description>
                                                    <Table basic="very">
                                                        <Table.Body>
                                                            <Table.Row>
                                                                <Table.Cell textAlign='center'>{dat.ucapan}</Table.Cell>
                                                            </Table.Row>
                                                        </Table.Body>
                                                    </Table>
                                                </Card.Description>
                                            </Card.Content>

                                        </Card>
                                    </Card.Group>
                                </Container>
                            </div>
                        )
                    }
                    )}
                </Container>
            </div>
        );
    }
}

export default Ucapan;