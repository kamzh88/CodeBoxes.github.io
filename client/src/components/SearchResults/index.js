import React, { Component, Fragment } from "react";
import { Card } from '@material-ui/core';
import { BookResult } from "../BookResult";

const styles = {
    Card: {
        marginTop: 30,
        height: 540
    }
}

class SearchBooks extends Component {

    render() {
        return (
            <Card style={styles.Card}>
                <h2 style={{ marginLeft: 10 }}>Search Results</h2>
                {/* {this.state.results.map(result => (
                    <BookResult
                    />
                ))} */}
            </Card>

        );
    };
};

export default SearchBooks;