import React, { Component } from "react";
import axios from 'axios';
import { TextField, MenuItem } from '@mui/material';
import { data } from "./values";
import { useParams } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
  


export default class Update extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telephone: '',
            serial: '',
            email: '',
            location: '',
            commencement: new Date(),
            department: '',
            modal14: false
        }

        this.handleCommencement = this.handleCommencement.bind(this);
        this.handleFirstname = this.handleFirstname.bind(this);
        this.handleLastname = this.handleLastname.bind(this);
        this.handleTelephone = this.handleTelephone.bind(this);
        this.handleId = this.handleId.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleDepartment = this.handleDepartment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        axios.get('http://localhost:4000/employee/62a7c436a19d58ea1d53c2ba')
        .then((res) =>{
                this.setState({
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    telephone:  res.data.telephone,
                    serial: res.data.serial,
                    email: res.data.email,
                    location: res.data.location,
                    commencement: res.data.commencement,
                    department: res.data.department
                });
            })
            .catch((err) => console.log(err));
    }

    handleFirstname(b){
        this.setState({
            firstname: b.target.value
        });
    }

    handleLastname(c){
        this.setState({
            lastname: c.target.value
        });
    }

    handleTelephone(d){
        this.setState({
            telephone: d.target.value
        });
    }

    handleId(e){
        this.setState({
            serial: e.target.value
        });
    }

    handleEmail(f){
        this.setState({
            email: f.target.value
        });
    }

    handleLocation(g){
        this.setState({
            location: g.target.value
        });
    }

    handleCommencement(date){
        this.setState({
            commencement: date.target.value,
        });
    }

    handleDepartment(i){
        this.setState({
            department: i.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        const employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            telephone:  this.state.telephone,
            serial: this.state.serial,
            email: this.state.email,
            location: this.state.location,
            commencement: this.state.commencement,
            department: this.state.department
        }

        axios.post('http://localhost:4000/employee/update'+this.props.match.params.id, employee)
        .then(res => console.log(res.data));

        console.log(employee);
        window.location = '/admin';
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }

    render(){
        
        return(
            <div className="row">
                <div className="col-md-2"></div>
                    <div className="col col-md-8">
                        <h2>Edit {this.state.firstname}'s Data</h2><br />
                        <form onSubmit={this.handleSubmit} >
                            
                            <div className="form-group">
                                <label>Surname:</label>
                                <input 
                                type="text"
                                required
                                placeholder="Akweter"
                                className="form-control"
                                value={this.state.firstname}
                                onChange={this.handleFirstname}/>
                            </div>
                            <div className="form-group">
                                <label>Lastname:</label>
                                <input 
                                type="text"
                                required
                                placeholder="James"
                                className="form-control"
                                value={this.state.lastname}
                                onChange={this.handleLastname}/>
                            </div>
                            <div className="form-group">
                                <label>Telephone:</label>
                                <input 
                                type="tel"
                                placeholder="Eg: +233 5405 44760"
                                required
                                className="form-control"
                                value={this.state.telephone}
                                onChange={this.handleTelephone}/>
                            </div>
                            <noscript className="form-group">
                                <label>ID Number:</label>
                                <input 
                                type="text"
                                required
                                placeholder="G45H78340FS"
                                className="form-control"
                                value={this.state.serial}
                                onChange={this.handleId}/>
                            </noscript>
                            <div className="form-group">
                                <label>Email:</label>
                                <input 
                                type="email"
                                required
                                placeholder="example@mail.com"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Location:</label>
                                <input 
                                type="text"
                                required
                                placeholder="Ablekuma - Accra"
                                className="form-control"
                                value={this.state.location}
                                onChange={this.handleLocation}/>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label>Date:</label><br />
                                    <input
                                        type="date"       
                                        value={this.state.commencement}
                                        onChange={this.handleCommencement}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Specialization:</label>
                                <br />
                                <TextField
                                    select
                                    required
                                    className="form-control"
                                    label="Web Development"
                                    value={this.state.department}
                                    onChange={this.handleDepartment}>
                                    {
                                    data.map((all) => (
                                        <MenuItem key={all} value={all}>
                                            {all}
                                        </MenuItem>))
                                    }
                                </TextField>
                            </div>
                            <p />
                            <button type="submit" name="submit-btn" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                <div className="col-md-2"></div>
            </div>
            
        );
    }
}


/*

  

  render() {
  }
}

export default ModalPage;

*/