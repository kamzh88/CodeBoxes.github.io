import React, { Component } from "react";
import Heading from '../../components/Jumbotron';
import SearchBooks from "../../components/SearchBooks";
import SearchResults from "../../components/SearchResults";
import Wrapper from "../../components/Wrapper"
import API from "../../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: [],
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const search = encodeURIComponent(this.state.search.trim())
        API.getBookList(search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.items, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    }

    handleBtnClick = book => {
        API.saveBook(book)
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Wrapper>
                <Heading />
                <SearchBooks
                    handleFormSubmit={this.handleFormSubmit}
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <SearchResults
                    results={this.state.results}
                    handleBtnClick={this.handleBtnClick}
                />
            </Wrapper>
        );
    };
};

export default Search;