import React from "react";
import { Link , Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Add from "./component/Add"
import Edit from "./component/Edit";
import Candidates from "./component/Candidates";

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                Candidates
            </Link>
            <div className="navbar-nav">
                <li className="nav-item ">
                    <Link to={"/add"} className="nav-link ">
                        <button type="button" className="btn btn-outline-success">Add</button>
                    </Link>
                </li>
            </div>
        </nav>
        <div className="container mt-3">
            <Switch>
                <Route exact path="/" component={Candidates} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/edit/:id" component={Edit} />
            </Switch>
        </div>
    </div>
  );
}

export default App;
