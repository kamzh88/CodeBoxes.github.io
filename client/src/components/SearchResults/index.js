import React, { Component, Fragment } from "react";
import { Card, Button, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const styles = {
    Card: {
        marginTop: 30,
        height: 540,
        overflowY: 'scroll'
    }
}

class SearchResults extends Component {
    render() {
        return (
            
            <div style={styles.Card}>
                <Card variant="outlined">
                    <h2 style={{ marginLeft: 60 }}>Results</h2>
                    <ul>
                        {this.props.results.map(result => (
                            
                            <Card key={result.id} variant="outlined" style={{ width: "auto", margin: 20 }}>
                                <li style={{ overflow: "auto", padding: 10 }}>
                                    <Grid 
                                    container 
                                    justify="flex-end">
                                        <Button 
                                        variant="contained" 
                                        color="primary" 
                                        size="small" 
                                        startIcon={<SaveIcon />} 
                                        value={result}
                                        onClick={() => this.props.handleBtnClick(result.id)}
                                        >Save
                                        </Button>
                                    </Grid> 
                                    Title: {result.volumeInfo.title}<br></br>
                                    {/* Image: {result.volumeInfo.imageLinks.smallThumbnail} */}
                                    Subtitle: {result.volumeInfo.subtitle}<br></br>
                                    Authors: {result.volumeInfo.authors}<br></br>
                                    Description: {result.volumeInfo.description}<br></br>
                                    Link: {result.volumeInfo.infoLink}<br></br>
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