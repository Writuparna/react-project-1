import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {TextInput} from './../../../utils/FormComponent'; 

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
          <TextInput inputType="text" name="firstname" labelName="First name"/>
          <TextInput inputType="text" name="lastname" labelName="Last name"/>
          <TextInput inputType="email" name="email" labelName="Email id"/>
          <TextInput inputType="tel" name="phone" labelName="Phone number"/>
          <TextInput inputType="password" name="password" labelName="Password"/>
          <TextInput inputType="retypepassword" name="retypepassword" labelName="Confirm password"/>
          <label>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </label>
        </form>
      </DefaultStructureComponent>
    );
  }
}