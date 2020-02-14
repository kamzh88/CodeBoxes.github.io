import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


const styles = {
    headerStyle: {
        maxWidth: "100%",
        background: "lightgrey",
        textAlign: "center",
        padding: 0,
        marginTop: 65,
        height: 130,
        overflow: "auto"
    },
    headerText: {
        color: "#fff",
    }
}

class Heading extends Component {
    render() {
        return (
            
                <Jumbotron style={styles.headerStyle} fluid>
                    <Container>
                        <h1>Google Books Search</h1>
                        <p>Search for and Save Books of Interest</p>
                    </Container>
                </Jumbotron>
          
        );
    };
};

export default Heading;