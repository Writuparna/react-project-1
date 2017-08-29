import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {ApiComponent} from './../../../utils/ApiComponent'; 

export class AboutComponent extends Component {
  render() {
    return (
      <DefaultStructureComponent>
        this is about page
        <ApiComponent subreddit="reactjs" />
      </DefaultStructureComponent>
    );
  }
}