import React, { Component } from "react";
import { FormControl, InputLabel, Input, Card, Button } from '@material-ui/core';

const styles = {
    Card: {
        marginTop: 30,
        height: 200,
       
    },
    form: {
        display: "flex",
        flexDirection: "column"
    }
}

class SearchBooks extends Component {

    render() {
        return (
            <Card style={styles.Card}>
                <h3>Book Search</h3>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Book Name</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
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