import React, { Component, Fragment } from "react";
import Heading from '../../components/Jumbotron';
import SearchBooks from "../../components/SearchBooks";
import SearchResults from "../../components/SearchResults";

class Search extends Component {

    render() {
        return (
            <Fragment>
                <Heading />
                <SearchBooks />
                <SearchResults />
            </Fragment>
        );
    };
};

export default Search;