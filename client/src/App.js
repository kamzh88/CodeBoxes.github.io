import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Wrapper>
        <Route exact path="/" component={Search} />
        <Route exact path="/save" component={Saved} />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
