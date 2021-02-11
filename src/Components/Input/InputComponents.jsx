import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../Input/Input.styles.css";
import MyCard from "../Cards/CardComponents";


export default class InputComponents extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        index:'1',
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key:''
        }
      });
    }
  }
  render() {
    return (
      <>
      <form onSubmit={this.addItem}>
      <div className="input-container">
        <div className="wrapper">
        <Container >
          <Row>
            <Col>
                <input id="inp" type="text" 
                value={this.state.currentItem.text}
                onChange={this.handleInput}
                ></input>
            </Col>
            <Col>
            <Row>
            <button id="btn" type="submit" >ADD+</button>
            </Row>
             <Row>
             <button id="btn">CLEAR</button>
             </Row>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
      <MyCard items= {this.state.items}></MyCard>
      </form>
      
    </>
    )
  }
}

