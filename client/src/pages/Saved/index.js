import React, { Component } from "react";
import Heading from '../../components/Jumbotron';
import API from "../../utils/API";

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
                {this.state.books.map(book => (
                    <div key={book._id}>
                        <p><img src={book.image} /></p>
                        <p>Title: {book.title}</p>
                        <p>Subtitle: {book.subtitle}</p>
                        <p>Authors: {book.authors}</p>
                        <p>Description: {book.description}</p>
                        <p>Link: {book.link}</p>
                        <br></br>
                    </div>
                ))}
            </div>
        )
    }
}

export default Saved;