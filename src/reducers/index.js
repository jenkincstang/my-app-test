const initState = {
  todoItems: []
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM': {
      console.log("id:"+action.item.id);
      console.log("content:"+action.item.content);
      console.log("status:"+action.item.status);
      return {
        todoItems: [...state.todoItems, action.item],
      }
    }
    case 'UPDATE_ITEM': {
      return {
        ...state,
        todoItems: state.todoItems.map(item => item.id === action.id ? { ...item, status: !item.status } : item)
      }
    }
    case 'DELETE_ITEM': {
      return {
        ...state,
        todoItems: state.todoItems.filter((todoItem) =>
          todoItem.id != action.id
        )
      }
    }
    default:
      return state
  }
}
