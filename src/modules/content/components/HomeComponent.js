import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {RightSidebarComponent} from './../../../utils/DefaultStructureComponent'; 
import {AskQuestion} from './../../../utils/DefaultStructureComponent';
import {PostComponent} from './../../../utils/PostComponent';
import {UserprofileComponent} from './../../../utils/PostComponent';
import {CommentComponent} from './../../../utils/PostComponent';
import {QsansComponent} from './../../../utils/PostComponent';
import {TopicComponent} from './../../../utils/PostComponent';


export class HomeComponent extends Component {
  render() {
    return (
    	<div>
	      <DefaultStructureComponent>
            <div className="row">
              	<div className="col-sm-12">
	                <div className="row">
				        <div className="col-sm-9">
                			<AskQuestion/>
							<PostComponent>
								<TopicComponent topic="Music"/>								
								<QsansComponent qus="This is 1st question" ans="Answer is upcoming"/>
								<UserprofileComponent username="Saswata" usertag="Lorem ipsum" />
								<CommentComponent name="Someone user"/>	
							</PostComponent>



							<PostComponent topic="Photography">	
								<QsansComponent qus="This is 1st question" ans="Answer is upcoming"/>
								<UserprofileComponent username="Writuparna" usertag="Lorem ipsum" />
								<CommentComponent name="Someone user"/>	
							</PostComponent>						
				        </div>
	        			<RightSidebarComponent />
				    </div>
		    	</div>
			</div>
	      </DefaultStructureComponent>
      	</div>
    );
  }
}