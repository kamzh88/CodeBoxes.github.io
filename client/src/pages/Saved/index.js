import React, { Component } from "react";
import Heading from '../../components/Jumbotron';
import SaveResults from "../../components/SaveResults";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";

class Saved extends Component {
    state = {
        books: [],
        title: [],
        author: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => {
                // console.log(res.data);
                let title = this.state.title;
                let author = this.state.author;
                res.data.map(book => {
                    // console.log(book.title);
                    title.push(book.title)
                    author.push(book.authors);
                })
                this.setState({ books: res.data, title: title, author: author })
                // console.log(author);
            })
            .catch(err => console.log(err));
    }

    render() {
        // console.log(this.state.title)
        // console.log(this.state.author)
        return (
            <div>
                <Heading />
                <Wrapper>

                    {/* <SaveResults> */}
                    {this.state.books.map(book => (
                        <div>
                            <p>Title: {book.title}</p>
                            <p>Authors: {book.authors}</p><br></br>
                        </div>

                    ))}





                    {/* title={this.state.title}
                        author={this.state.author}
                     {this.state.title} */}
                    {/* </SaveResults>  */}
                    {/* {
                    this.state.title.map((title, index) => (<h2 key={index}>{title}</h2>)),
                    this.state.author.map((author, index) => (<h4 key={index}>{author}</h4>))
                    } */}


                </Wrapper >
            </div>
        )
    }
}

export default Saved;