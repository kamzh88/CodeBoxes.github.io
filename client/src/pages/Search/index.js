import React, { Component, Fragment } from "react";
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

    handleBtnClick = id => {
        const books = this.state.results;
        for (let i = 0; i < books.length; i++) {
            // console.log(books[i].id);
            if (books[i].id === id) {
                const title = books[i].volumeInfo.title;
                const authors = books[i].volumeInfo.authors;
                const description = books[i].volumeInfo.description;
                const link = books[i].volumeInfo.infoLink;
            }
        }
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