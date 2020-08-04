export default (state = { todoItems: []}, action) => {
  console.log(action);
  switch (action.type) {
<<<<<<< HEAD
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'INPUT_CHANGE'
      return state
=======
    case 'ADD_ITEM': {
      console.log(action.value);
      console.log(action.mark);
      return {
        todoItems: [...state.todoItems, action.item]
      }
    }
    case 'UPDATE_ITEM': {
      console.log(action.index);
        state.todoItems[action.index].mark = !state.todoItems[action.index].mark;
        console.log(state.todoItems[action.index].mark);
        console.log(!state.todoItems[action.index].mark);
        console.log("TODO"+[...state.todoItems]);
        return {todoItems:[...state.todoItems]}
    }
    case 'DELETE_ITEM': {
      return {
        todoItems: state.todoItems.filter((todoItem, index) =>
          index != action.index
        )
      }
    }
>>>>>>> 7d18448b31c630d46df23726615eefe4c02eb5a5
    default:
      return state
  }
}
