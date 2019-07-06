import React,{Component} from 'react';
import {connect} from 'react-redux';
import './todoList.css';

class TodoList extends Component{
    render(){
    const {todos,handleDel} = this.props;
      return(
        <div className="todoList">
          {todos.map(({value,id})=> 
          <div className="todos" key ={id}>
            <input type="checkbox"/>
            <p>{value}</p>
            <button className="delete" onClick={()=>handleDel(id)}>X</button>
            <button className="edit">E</button>
          </div>
          )}
        </div>
      )
    }
}

const mapStateToProps = (state/*OwnProps*/) =>{
  return({
    todos: state.todos,
  });
};
const mapDispatchToProps = (dispatch)=>
  ({
    handleDel:(id) => dispatch({type:'DEL',id}),
  });

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);