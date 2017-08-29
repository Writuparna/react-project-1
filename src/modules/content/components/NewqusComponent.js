import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {PostComponent} from './../../../utils/PostComponent'; 
import {QsansComponent} from './../../../utils/PostComponent';


export class NewqusComponent extends Component {
	render(){
		return(
			<DefaultStructureComponent>
	            <div className="row">
	              	<div className="col-sm-12">
		                <div className="row">
					        <div className="col-sm-9">
								<PostComponent>						
									<QsansComponent qus="This is 1st question"/>	
								</PostComponent>		
								<PostComponent>						
									<QsansComponent qus="This is 2nd question"/>
								</PostComponent>				
								<PostComponent>						
									<QsansComponent qus="This is 3rd question"/>	
								</PostComponent>				
								<PostComponent>						
									<QsansComponent qus="This is 4th question"/>
								</PostComponent>						
								<PostComponent>						
									<QsansComponent qus="This is 5th question"/>	
								</PostComponent>								
							</div>
						</div>
					</div>
				</div>
			</DefaultStructureComponent>
		)
	}
}