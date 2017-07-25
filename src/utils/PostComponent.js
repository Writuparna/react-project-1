import React, { Component } from 'react';

export class PostComponent extends Component {
	render(){
		return(
			<article className="panel panel-default blogPost">
				<h3 className="panel-heading">Topic: {this.props.topic}</h3>
				<div className="panel-body">
					<h2>{this.props.question}</h2>
					<p><i>{this.props.user}</i></p>
					<div className="ansSec">
						{this.props.answer}
					</div>		
				</div>		
			</article>         
		)
	}
}
