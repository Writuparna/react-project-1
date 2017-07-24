import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 

export class LoginComponent extends Component {
  render() {
    return (
      <DefaultStructureComponent>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" />
          </label><br/>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </DefaultStructureComponent>
    );
  }
}