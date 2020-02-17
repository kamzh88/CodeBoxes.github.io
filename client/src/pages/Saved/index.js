import React, { Component } from "react";
import Heading from '../../components/Jumbotron';
import SaveResults from "../../components/SaveResults";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";

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
        console.log(this.state.books);
        return (
            <div>
                <Heading />
                {this.state.books.map(book => (
                    <div key={book._id}>
                        <p>Title: {book.title}</p>
                        <p>Image: {book.image}</p>
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