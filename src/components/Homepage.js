import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Home extends Component{
    render(){
        return(
            < div>
                <div className="row">
                        <h1>Welcome to Persol Systems Limited</h1>
                        <p />
                        < p />
                    <div className="col-md-9">
                        <p>All new aplicants must make sure to provide their details.</p>
                    </div>
                    <div className="col-md-10 offset-4">
                        <p>Click <kbd> <Link to='/add'> here</Link></kbd> to submit your informations</p>
                    </div>
                </div>
                <img src="pss.png" width="100%" alt="persol-system-logo" />
            </div>
        );
    }
}