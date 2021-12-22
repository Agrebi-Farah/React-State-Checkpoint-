import React, { Component } from 'react' ;
import Profile from './profile' ;
import '../Components/parentprofil.css';
import {Button} from 'react-bootstrap';

export default class parentprofile extends Component {
    constructor(props) {
super(props)

this.state = {
    name :'Farah Agrebi' ,
    description : 'Friendly,Thoughtful,	Emotional and Ambitious ' ,
    image : 'https://avatars.githubusercontent.com/u/94625157?v=4' ,
    show:false

    }

    }
  

    

    toggleButton = () => { 
        this.setState({show:!this.state.show }) 
    }
    render() {
        return (
            <div className="profile">
                <h1 className="title">WELCOME</h1> 
                 <br/>
                 <Button variant="primary"  onClick={ () => this.toggleButton ()}>{this.state.show ? 'Click to hide' : 'Click to show'}</Button>
                {this.state.show ?<Profile name ={this.state.name} description ={this.state.description} image ={this.state.image}/> : null }
                
            </div>
        )
    }
}
