export default (state = {todoItems:[]}, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM':{
      console.log(action.value);
      return {
        todoItems: [...state.todoItems, action.value]
      }
    }

    case 'DELETE_ITEM': {
      return {
        todoItems: state.todoItems.filter((todoItem, index) => 
            index != action.index
        )
      }
    }
    case 'DECREMENT':
      return state - 1
    case "UNMOUNT_COUNTER":
      return state - action.count
    default:
      return state
  }
}
