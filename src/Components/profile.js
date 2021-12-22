 import React, { Component } from 'react' ;
 import {Card} from 'react-bootstrap'; 
 import '../Components/parentprofil.css';
 export default class profile extends Component {
   constructor(props) {
   super(props)
}
     render() {
         return (
             <div className ='main'>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title className="name">{this.props.name}</Card.Title>
    <Card.Text>
      {this.props.description}
    </Card.Text>
   
  </Card.Body>
</Card> 
             </div>
         )
     }
 }
 