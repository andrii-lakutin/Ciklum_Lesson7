import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    	value: "",
    	comments: this.props.comments
    };
    this.inputChange = this.inputChange.bind(this);
    this.send = this.send.bind(this);
  }

  inputChange(event){
  	this.setState({value: event.target.value});
  }

  send(){
  	if (this.state.value != "") {
  		this.setState({comments: this.state.comments.concat(this.state.value)});
  		this.setState({value: ""});
  	}
  }

  render(){

  	const comments = this.state.comments.map((value, index) => {
  		return <li key={index}>{value}</li>
    })

    const style = {
   		listStyle : 'none',
   		padding : 5,
   		margin: 0,
   		background: '#212121',
   		color: 'white'
  	}

  	return (
  		<div>
  			<div>
  				<ul style={style}>
  					{comments}
  				</ul>
  			</div>
  			<input type="text" value={this.state.value} onChange={this.inputChange}/>
  			<input type="button" value={"Send"} onClick={this.send}/>
  			<p>Comments: {this.state.comments.length}</p>
  		</div>
  	);
  }
}
