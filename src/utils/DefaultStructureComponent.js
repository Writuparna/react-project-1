import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export class DefaultStructureComponent extends Component {
	render(){
		return(
			<div>
				<HeaderComponent/>
					<div className="container bodySection">
            <div className="row">
              {this.props.children}
            </div>
          </div>
				<FooterComponent />
			</div>
		)
	}
}

export class HeaderComponent extends Component {
  render(){
    return(
      <div>
      	<MenuComponent />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export class MenuComponent extends Component {  
  render(){
    return(
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" href="#">React learning</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link activeClassName="active" to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
            <SearchComponent />  
          </div>        
        </div>
      </nav>
    )
  }
}

export class SearchComponent extends Component {
  render(){
    return(
      <div>
        <form className="navbar-form navbar-left">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export class FooterComponent extends Component {
  render(){
    return(
      <div className="footerSec container-fluid">
            <p>&copy; copyright</p>
      </div>
    )
  }
}