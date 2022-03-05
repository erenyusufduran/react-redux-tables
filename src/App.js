import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <h1>Welcome to React App</h1>
        </Route>
        <Route exact path="/add">
          <h1>Add Component</h1>
        </Route>
        <Route exact path="/edit/:id">
          <h1>Edit Component</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
