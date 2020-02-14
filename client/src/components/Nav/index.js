import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

class Nav extends Component {

    render() {
        return (
            
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" style={{ marginRight: 16 }}>
                            Google Books
                        </Typography>
                        <Link to="/" style={{ marginRight: 16 }}>Search</Link>
                        <Link to="/save" style={{ marginRight: 16 }}>Saved</Link>
                    </Toolbar>
                </AppBar>
        )
    }

}

export default Nav;