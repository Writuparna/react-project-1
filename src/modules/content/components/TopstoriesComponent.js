import React, { Component } from 'react';
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {PostComponent} from './../../../utils/PostComponent'; 
import {QsansComponent} from './../../../utils/PostComponent';


export class TopstoriesComponent extends Component {
	render(){
		return(
			<DefaultStructureComponent>
	            <div className="row">
	              	<div className="col-sm-12">
		                <div className="row">
					        <div className="col-sm-9">
								<PostComponent>						
									<QsansComponent qus="This is 1st question" ans="Answer is upcoming"/>								
								</PostComponent>								
							</div>
						</div>
					</div>
				</div>
			</DefaultStructureComponent>
		)
	}
}