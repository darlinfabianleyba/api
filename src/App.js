import Home from "./_pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./_pages/Login";

function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Home" exact component={Home} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
