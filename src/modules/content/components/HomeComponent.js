import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {RightSidebarComponent} from './../../../utils/DefaultStructureComponent'; 
import {AskQuestion} from './../../../utils/DefaultStructureComponent';
import {PostComponent} from './../../../utils/PostComponent';
import {UserprofileComponent} from './../../../utils/PostComponent';


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
							<PostComponent topic="Music" question="This is 1st question"  answer="Answer is upcoming">
								<UserprofileComponent username="Saswata" usertag="Lorem ipsum" />
							</PostComponent>	
							<PostComponent topic="Photography" question="This is 1st question"  answer="Answer is upcoming">
								<UserprofileComponent username="Writuparna" usertag="Lorem ipsum" />
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