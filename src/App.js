import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/add">
          <AddContact />
        </Route>
        <Route exact path="/edit/:id">
          <h1>Edit Component</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
