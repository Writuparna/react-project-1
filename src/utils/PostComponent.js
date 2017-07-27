import React, { Component } from 'react';

export class PostComponent extends Component {
	render(){
		return(
			<article className="panel panel-default blogPost">
				<h3 className="panel-heading">Topic: {this.props.topic}</h3>
				<div className="panel-body">
					<h2>{this.props.question}</h2>
					<p><i>{this.props.user}</i></p>

						{this.props.children}					
					<div className="ansSec">
						{this.props.answer}
					</div>	
					<CommentComponent name="Someone user"/>	
				</div>		
			</article>         
		)
	}
}


export class UserprofileComponent extends Component {
	render(){
		return(
			<div>
				<h3 className="userName">{this.props.username}</h3>
				<p className="userTagline">{this.props.usertag}</p>
				<p className="userOccupation">{this.props.useroccupation}</p>
				<p className="userEducation">{this.props.usereducation}</p>
				<p className="userLoation">{this.props.userlocation}</p>
				<div className="userActivity">{this.props.useractivity}</div>				
			</div>
		)
	}
}

export class CommentComponent extends Component{
	render(){
		return(
			<div className="well commentArea">
				<label>{this.props.name}</label>
				<input type="text" className="form-control" placeholder="Comment here"/>
			</div>
		)
	}
}