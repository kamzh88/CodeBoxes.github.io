import React from "react";
import { FormControl, InputLabel, Input, Card, Button } from '@material-ui/core';

const styles = {
    Card: {
        marginTop: 30,
        height: 170,
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

function SearchBooks(props) {
    // console.log(props)
    return (
        <Card style={styles.Card}>
            <h2 style={{ marginLeft: 10 }}>Book Search</h2>
            <form style={styles.form}>
                <FormControl>
                    <InputLabel style={styles.inputStyles} htmlFor="my-input">Book Name</InputLabel>
                    <Input
                        style={styles.inputStyles}
                        id="my-input"
                        type={"search"}
                        label={"Search"}
                        value={props.search}
                        onChange={props.handleInputChange}
                    />
                </FormControl>
                <Button
                    variant={'contained'}
                    onClick={props.handleFormSubmit}
                >Submit</Button>
            </form>
        </Card>
    );

};

export default SearchBooks;