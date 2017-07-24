import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {TextInput} from './../../../utils/FormComponent'; 

export class LoginComponent extends Component {
  render() {
    return (
      <DefaultStructureComponent>
        <form>
          <TextInput inputType="text" name="username" labelName="Username"/>
          <TextInput inputType="password" name="password" labelName="Password"/>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </DefaultStructureComponent>
    );
  }
}