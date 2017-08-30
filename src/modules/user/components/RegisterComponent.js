import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {TextInput} from './../../../utils/FormComponent'; 


export class RegisterComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstname : '',
      lastname : '',
      email : '',
      phone : '',
      password : '',
      retypepassword : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
  }
  handleChange(event){
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
     

  }
  handleSubmit(event){
    alert('firstname: '+this.state.firstname+' lastname: '+this.state.lastname+' email: '+this.state.email+' phone: '+this.state.phone+' password: '+this.state.password+' retypepassword: '+this.state.retypepassword);
    event.preventDefault();
  }

  render(){
    return(
      <DefaultStructureComponent>
        <form onSubmit={this.handleSubmit}>
         <TextInput inputType="text" name="firstname" labelName="First name" value={this.state.firstname} onChange={this.handleChange}/>
          <TextInput inputType="text" name="lastname" labelName="Last name" value={this.state.lastname} onChange={this.handleChange}/>
          <TextInput inputType="email" name="email" labelName="Email id" value={this.state.email} onChange={this.handleChange}/>
          <TextInput inputType="tel" name="phone" labelName="Phone number" value={this.state.phone} onChange={this.handleChange}/>
          <TextInput inputType="password" name="password" labelName="Password" value={this.state.password} onChange={this.handleChange}/>
          <TextInput inputType="retypepassword" name="retypepassword" labelName="Confirm password" value={this.state.retypepassword} onChange={this.handleChange}/>
            <label>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </label>
        </form>
      </DefaultStructureComponent>
    )
  }
}