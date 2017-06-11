export default function Reducers(state={
    replies:false
}, action) {
  switch (action.type) {
      case "REPLIES":
      {
          return {...state, replies: action.payload}
      }
    default:
      return state;
  }
}
