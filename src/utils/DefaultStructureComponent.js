import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export class DefaultStructureComponent extends Component {
	render(){
		return(
			<div>
				<HeaderComponent/>
					{this.props.children}
				<FooterComponent />
			</div>
		)
	}
}

export class HeaderComponent extends Component {
  render(){
    return(
      <div>
      	Header section start here
      	<MenuComponent />
        <SearchComponent />
      	{this.props.children}
      </div>
    )
  }
}

export class MenuComponent extends Component {  
  render(){
    return(
      <div>
        <ul>
        	<li><Link to="/">Home</Link></li>
        	<li><Link to="/about">About</Link></li>
        	<li><Link to="/login">Login</Link></li>
        	<li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    )
  }
}

export class SearchComponent extends Component {
  render(){
    return(
      <div>
        <label>
          <input type="text" value="search" />
        </label>
        <label>
          <input type="submit" value="submit" />
        </label>
      </div>
    )
  }
}

export class FooterComponent extends Component {
  render(){
    return(
      <div>
        <p>This is footer</p>
      </div>
    )
  }
}