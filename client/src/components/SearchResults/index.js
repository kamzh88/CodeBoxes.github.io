import React, { Component, Fragment } from "react";
import { Card } from '@material-ui/core';

const styles = {
    Card: {
        marginTop: 30,
        height: 540
    }
}

class SearchBooks extends Component {

    render() {
        return (
            <Fragment>
                <Card style={styles.Card}>
                    <h2 style={{marginLeft: 10}}>Search Results</h2>
                    {/* <BookResult /> */}
                </Card>
            </Fragment>
        );
    };
};

export default SearchBooks;