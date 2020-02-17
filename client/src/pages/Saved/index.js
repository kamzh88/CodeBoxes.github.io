import React, { Component } from "react";
import Heading from '../../components/Jumbotron';
import SearchResults from "../../components/SearchResults";
import API from "../../utils/API";

class Saved extends Component {

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>{
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Heading />
                {/* <SearchResults>

            </SearchResults> */}
            </div>
        )
    }
}

export default Saved;