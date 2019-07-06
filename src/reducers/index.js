import'../actions/index';

export const initialState ={
  //nextId : 0,
  todos:[
    {value:"Comer",id:0},
    {value:"Correr",id:1},
    {value:"Dormir",id:2},
  ],
  todo :{},
}

export const rootReducer =(state = initialState,action)=>{
  switch(action.type){
    case 'DEL':
      const{id} = action;
      return {
        ...state,
        todos:state.todos.filter(todo =>todo.id !== id)
      }
    default: return state;
  }
};

export default rootReducer;