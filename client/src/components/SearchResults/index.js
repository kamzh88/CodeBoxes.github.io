import React, { Component } from "react";
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
                        {this.props.results.map(({ volumeInfo }, index) => (
                            <Card key={index} variant="outlined" style={{ width: "auto", margin: 20 }}>
                                <li style={{ overflow: "auto", padding: 10 }}>
                                    <Grid
                                        container
                                        justify="flex-end">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            startIcon={<SaveIcon />}
                                            onClick={() => this.props.handleBtnClick({
                                                title: volumeInfo.title,
                                                image: volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : 'n/a',
                                                subTitle: volumeInfo.subtitle,
                                                authors: volumeInfo.authors,
                                                description: volumeInfo.description,
                                                link: volumeInfo.infoLink
                                            })}
                                        >Save
                                        </Button>
                                    </Grid>
                                    Title: {volumeInfo.title}<br></br>
                                    Image: {volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : 'n/a'}
                                    Subtitle: {volumeInfo.subtitle}<br></br>
                                    Authors: {volumeInfo.authors}<br></br>
                                    Description: {volumeInfo.description}<br></br>
                                    Link: {volumeInfo.infoLink}<br></br>
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