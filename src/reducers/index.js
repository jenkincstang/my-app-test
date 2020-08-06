const initState = {
  todoItems: [],
  nextItemId: 1
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM': {
      console.log(action.value);
      console.log(action.mark);
      return {
        todoItems: [...state.todoItems, { ...action.item, id: state.nextItemId }],
        nextItemId: state.nextItemId + 1
      }
    }
    case 'UPDATE_ITEM': {
      return {
        ...state,
        todoItems: state.todoItems.map(item => item.id === action.index ? { ...item, mark: !item.mark } : item)
      }
    }
    case 'DELETE_ITEM': {
      return {
        ...state,
        todoItems: state.todoItems.filter((todoItem) =>
          todoItem.id != action.index
        )
      }
    }
    default:
      return state
  }
}
