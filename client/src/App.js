import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/save" component={Saved} />
        </Wrapper>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
