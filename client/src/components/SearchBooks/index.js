import React, { Component } from "react";
import { FormControl, InputLabel, Input, Card, Button } from '@material-ui/core';

const styles = {
    Card: {
        marginTop: 30,
        height: 200,  
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: 10
    },
    inputStyle: {
        padding: 20
    }
}

class SearchBooks extends Component {

    render() {
        return (
            <Card style={styles.Card}>
                <h2 style={{marginLeft: 10}}>Book Search</h2>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <FormControl>
                        <InputLabel  style={styles.inputStyles} htmlFor="my-input">Book Name</InputLabel>
                        <Input style={styles.inputStyles} id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <Button 
                    variant={'contained'}
                    >Submit</Button>
                </form>
            </Card>
        );
    };
};

export default SearchBooks;