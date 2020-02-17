import React, { Component } from "react";
import { Card, Button, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const styles = {
    Card: {
        marginTop: 30,
        height: 540,
        overflowY: 'scroll'
    }
};

class SaveResults extends Component {
    render() {
        // console.log(this.props.author)
        return (
            <div>
                Title: {this.props.title}
                Author: {this.props.author}
            </div>
        );
    };
};

export default SaveResults;