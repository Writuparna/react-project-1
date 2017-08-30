import React, { Component } from 'react';
import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger,
} from 'react-bootstrap'; 
import {DefaultStructureComponent} from './../../../utils/DefaultStructureComponent'; 
import {TextInput} from './../../../utils/FormComponent'; 
import {
    PostComponent,
    UserprofileComponent,
    CommentComponent,
    QsansComponent,
    TopicComponent
    } from './../../../utils/PostComponent';


export class AskButton extends Component{  
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
      <div>
        <Button
          bsStyle="primary"
          onClick={this.open.bind(this)}
        >
          Ask Question
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>     
            <PostComponent>
              <UserprofileComponent username="Saswata"/>
            </PostComponent>
            <PopupaskComponent />
              <p><OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger>  <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger></p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}



export class PopupaskComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      question : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
  }
  handleChange(event){
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
     

  }
  handleSubmit(event){
    alert('question: '+this.state.question);
    event.preventDefault();
  }

  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <TextInput inputType="text" name="question" value={this.state.question} placeHolder="What is your question" onChange={this.handleChange}/> 
          <div className="modal-footer">        
            <label>
              <input type="submit" value="Submit" className="btn btn-primary" />
            </label>
          </div>
        </form>
    )
  }
}