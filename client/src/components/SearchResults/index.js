import React, { Component, Fragment } from "react";
import { Card } from '@material-ui/core';
import { BookResult } from "../BookResult";

const styles = {
    Card: {
        marginTop: 30,
        height: 540,
        overflowY: 'scroll'
    }
}

class SearchResults extends Component {

    render() {
        // const results = this.props.results
        // console.log(results)
        return (
            <div style={styles.Card}>
                <Card variant="outlined">
                    <h2 style={{ marginLeft: 60 }}>Results</h2>
                    <ul>
                        {this.props.results.map(result => (
                            <Card variant="outlined" style={{ width: "auto", margin: 20}}>
                                <li key={result.volumeInfo.industryIdentifiers[0].identifier} style={{overflow: "auto", padding: 10}}>
                                    Title: {result.volumeInfo.title}<br></br>
                                    Subtitle: {result.volumeInfo.subtitle}<br></br>
                                    Authors: {result.volumeInfo.authors}<br></br>
                                    Description: {result.volumeInfo.description}
                                    <br></br><br></br>
                                </li>
                            </Card>
                        ))}
                    </ul>

                </Card>
            </div >

        );
    };
};

export default SearchResults;