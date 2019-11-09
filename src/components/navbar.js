import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Finance
                    </a>

                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample04"
                        aria-controls="navbarsExample04"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-hamburger"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/e">All Expenses</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/e/one">One Expense</Link>
                            </li>
                        </ul>

                        <form className="form-inline my-2 my-md-0">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search"
                            />
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}
