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
            
                <Card style={styles.Card}>
                    <h2 style={{ marginLeft: 10 }}>Results</h2>
                    <ul> 
                        {this.props.results.map(result => (
                        <li key={result.volumeInfo.industryIdentifiers[0].identifier}>
                            Title: {result.volumeInfo.title}<br></br>
                            Subtitle: {result.volumeInfo.subtitle}<br></br>
                            Authors: {result.volumeInfo.authors}<br></br>
                            Description: {result.volumeInfo.description}
                            <br></br><br></br>
                        </li>
                        ))}
                    </ul>                 
                </Card>
         

        );
    };
};

export default SearchResults;