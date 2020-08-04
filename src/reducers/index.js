export default (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case "UNMOUNT_COUNTER":
      return state - action.count
    default:
      return state
  }
}
