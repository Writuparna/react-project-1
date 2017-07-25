import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {RightSidebarComponent} from './../../../utils/DefaultStructureComponent';
import {PostComponent} from './../../../utils/PostComponent';


export class HomeComponent extends Component {
  render() {
    return (
    	<div>
	      <DefaultStructureComponent>
	        <div className="col-sm-9">
				<PostComponent topic="Music" question="This is 1st question" user="Saswata" answer="Answer is upcoming"/>
				<PostComponent topic="Photography" question="My 1st question" user="Writuparna" answer="Answer is upcoming"/>
	        </div>
	        <RightSidebarComponent />
	      </DefaultStructureComponent>
      	</div>
    );
  }
}