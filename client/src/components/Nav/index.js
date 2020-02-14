import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

class Nav extends Component {

    render() {
        return (

            <Wrapper>
                <AppBar variant="fullWidth">
                    <Toolbar>
                        <Typography variant="h6" style={{ marginRight: 16 }}>
                            Google Books
                                    </Typography>
                        <Link to="/" style={{ marginRight: 16 }}>Search</Link>
                        <Link to="/save" style={{ marginRight: 16 }}>Saved</Link>
                    </Toolbar>
                </AppBar>
            </Wrapper>
        )
    }

}

export default Nav;