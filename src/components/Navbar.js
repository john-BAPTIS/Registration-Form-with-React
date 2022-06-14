import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar sticky navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x93QN1NF9OsFTvgHIBLd7KUM1B8fkVTwpA&usqp=CAU" width="45" alt="Persol-Ghana-Logo"/></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/form" className="nav-link">Form</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

//https://www.ghanayello.com/img/gh/s/1453119388-67-persol-systems-ltd.jpg
