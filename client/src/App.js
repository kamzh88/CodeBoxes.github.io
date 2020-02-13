import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (
          <Wrapper>
            <Link to="/"style={{ marginRight: 16 }}>Search</Link>
            <Link to="/save"style={{ marginRight: 16 }}>Saved</Link>
          </Wrapper>
        )}
        ></Route>/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
