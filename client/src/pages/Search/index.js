import React, { Component, Fragment } from "react";
import Heading from '../../components/Jumbotron';
import SearchBooks from "../../components/SearchBooks";
import SearchResults from "../../components/SearchResults";
import Wrapper from "../../components/Wrapper"
import API from "../../utils/API";

class Search extends Component {
    state = {
        search: "",
        books: [],
        // results
    }

    componentDidMount() {
        API.getBookList()
        .then(res => console.log(res));
    }

    handleInputChange = event => {
        let search = this.state.search;
        this.setState({ search: event.target.value });
    };

    render() {
        return (
            <Wrapper>
                <Heading />
                <SearchBooks
                    // handleFormSubmit={this.handleFormSubmit}
                    search = {this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <SearchResults

                />
            </Wrapper>
        );
    };
};

export default Search;