import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Heading extends Component {

    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Google Books Search</h1>
                    <p>Search for and Save Books of Interest</p>
                </Container>
            </Jumbotron>
        );
    };
};

export default Heading;