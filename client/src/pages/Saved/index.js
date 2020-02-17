import React, { Component } from "react";
import Heading from '../../components/Jumbotron';
import SaveResults from "../../components/SaveResults";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data)
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Heading />
                <SaveResults>

                </SaveResults>
            </div>
        )
    }
}

export default Saved;