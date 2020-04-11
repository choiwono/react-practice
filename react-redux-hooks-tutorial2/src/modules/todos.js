import produce from 'immer';

const ADDTODO = 'todo/ADDTODO';
const UPDATETODO = 'todo/UPDATETODO';
const DELETETODO = 'todo/DELETETODO';
const DONETODO = 'todo/DONETODO';

export const addTodo = (todo) => ({ type: ADDTODO, todo })
export const updateTodo = (todo) => ({ type: UPDATETODO, todo })
export const doneTodo = (todo) => ({ type: DONETODO, todo })
export const deleteTodo = (todo) => ({ type: DELETETODO, todo })

const initialState = {
  todos: [
    {
      id: 1,
      name: "오늘할일",
      done: false,
      regDate: "2020-02-15"
    },
    {
      id: 2,
      name: "오늘할일2",
      done: false,
      regDate: "2020-02-15"
    }
  ]
};

const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADDTODO :
            return state.todos.concat(action.todo);
         
    }
}