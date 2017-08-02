import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export class DefaultStructureComponent extends Component {
	render(){
		return(
			<div className="mainSec">
				<HeaderComponent/>
					<div className="container-fluid bodySection">
            <div className="row">
              <div className="col-sm-2">
                <LeftSidebarComponent />
              </div>
              <div className="col-sm-10">
                {this.props.children}
              </div>
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
      <div className="headerSec">
      	<MenuComponent />
        {this.props.children}
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
        <form className="navbar-form navbar-right">
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


export class LeftSidebarComponent extends Component {
  render(){
    return(
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/topstories">Top stories</Link>
          </li>
          <li className="list-group-item">
            <Link to="/newQs">New questions</Link>
          </li>
        </ul>
    )
  }
}

export class RightSidebarComponent extends Component {
  render(){
    return(
      <div className="col-sm-3">        
        <ul className="list-group">
          <li className="list-group-item">Lorem ipsum</li>
          <li className="list-group-item">Lorem ipsum</li>
          <li className="list-group-item">Lorem ipsum</li>
          <li className="list-group-item">Lorem ipsum</li>
        </ul>
      </div>
    )
  }
}

export class AskQuestion extends Component{
  render(){
    return(
      <div className="well askQus">
        <h3>Ask your question</h3>
        <input type="text" className="form-control" />
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