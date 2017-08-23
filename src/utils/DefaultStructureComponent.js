import React, { Component } from 'react';
import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger,
} from 'react-bootstrap'; 
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
  
  constructor(props){
    super(props);

    this.state = {
      showModal: false   
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  render(){
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
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
            <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Ask questions</button>
          </div>

          //modal start
          <div>
            <p>Click to get the full Modal experience!</p>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.open.bind(this)}
            >
              Launch demo modal
            </Button>
            <Modal show={this.state.showModal} onHide={this.close.bind(this   )}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Text in a modal</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                <h4>Popover in a modal</h4>
                <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                <h4>Tooltips in a modal</h4>
                <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
          //modal end


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