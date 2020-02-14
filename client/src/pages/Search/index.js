import React, { Component, Fragment } from "react";
import Heading from '../../components/Jumbotron';
import SearchBooks from "../../components/SearchBooks";

class Search extends Component {

    render() {
        return (
            <Fragment>
                <Heading />
                <SearchBooks />
            </Fragment>
        );
    };
};

export default Search;