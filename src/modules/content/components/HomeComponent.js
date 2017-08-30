import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {RightSidebarComponent} from './../../../utils/DefaultStructureComponent'; 
import {AskQuestion} from './../../../utils/DefaultStructureComponent';
import {PopupaskComponent} from './../../../utils/AskComponent';
import {
		PostComponent,
		UserprofileComponent,
		CommentComponent,
		QsansComponent,
		TopicComponent
		} from './../../../utils/PostComponent';

export class HomeComponent extends Component {

	constructor(props){
		super(props);
	}

  	render() {
	    return (
	    	<div>
		      <DefaultStructureComponent>
	            <div className="row">
	              	<div className="col-sm-12">
		                <div className="row">
					        <div className="col-sm-9">
	                			<PopupaskComponent/>
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