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
        return (
        <div>Title: {this.props}</div>
        );
    };
};

export default SaveResults;