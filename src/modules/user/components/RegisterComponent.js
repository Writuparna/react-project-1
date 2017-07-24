import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 

export class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname:'',
      email:'',
      phone:'',
      username:'',
      password:'',
      retypepassword:''
    };
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <DefaultStructureComponent>
        <form>
          <label>
            First name:
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange.bind(this)} />
          </label><br/>
          <label>
            Last name:
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Email id:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Phone number:
            <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Confirm password:
            <input type="password" name="retypepassword"  value={this.state.retypepassword} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </DefaultStructureComponent>
    );
  }
}