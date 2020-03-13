import React, { Component } from "react";
import { Card, Button, Grid } from '@material-ui/core';
import Heading from '../../components/Jumbotron';
import API from "../../utils/API";

const styles = {
    Card: {
        marginTop: 30,
        height: 540,
        overflowY: 'scroll'
    }
}

class Saved extends Component {
    state = {
        books: [],
        title: [],
        author: [],

    };

    componentDidMount() {
        API.getBooks()
            .then(res => {
                let title = this.state.title;
                let author = this.state.author;
                res.data.map(book => {
                    title.push(book.title)
                    author.push(book.authors);

                })
                this.setState({ books: res.data, title: title, author: author })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Heading />
                <div style={styles.Card}>
                    <Card variant="outlined">
                        {this.state.books.map((book, index) => (
                            <Card key={index} variant="outlined" style={{ width: "auto", margin: 20 }}>
                                <div style={{ overflow: "auto", padding: 10 }}>
                                    <img src={book.image} />
                                    <p>Title: {book.title}</p>
                                    <p>Subtitle: {book.subtitle}</p>
                                    <p>Authors: {book.authors}</p>
                                    <p>Description: {book.description}</p>
                                    <a href={book.link}>More Info</a><br></br>
                                    <br></br>
                                </div>
                            </Card>
                        ))}
                    </Card>
                </div>
            </div>
        )
    }
}

export default Saved;