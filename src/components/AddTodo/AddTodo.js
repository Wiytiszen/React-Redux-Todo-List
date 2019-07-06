import React,{Component} from 'react';
import {connect} from 'react-redux';

class AddTodo extends Component{
  render(){
    return(
      <div className="addTodo">
        <input type="text" placeholder="What to do?"/>
      </div>
    )
  }
}
export default AddTodo;