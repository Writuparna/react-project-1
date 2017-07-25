import React, { Component } from 'react';

export class TextInput extends Component {
	render(){
		return(
			<div className="form-group">
				<label htmlFor={this.props.labelName}>{this.props.labelName} :</label>
				<input type={this.props.inputType} name={this.props.name} className="form-control" placeholder={this.props.placeHolder}/>
			</div>         
		)
	}
}
