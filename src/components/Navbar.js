import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar sticky navbar-dark bg-dark navbar-expand-lg">
                <a href="/" className="navbar-brand"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x93QN1NF9OsFTvgHIBLd7KUM1B8fkVTwpA&usqp=CAU" width="45" alt="Persol-Ghana-Logo"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/form" className="nav-link">Form</Link>
                        </li>
                        <noscript className="navbar-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </noscript>
                        <li className="navbar-item">
                            <Link to="/admin" className="nav-link">Database</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

//https://www.ghanayello.com/img/gh/s/1453119388-67-persol-systems-ltd.jpg
