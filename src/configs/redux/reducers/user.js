const initialStateUser = {
  username: 'risano@gmail.com',
  userId: '12334',
  users: []
}
const userReducer = (state = initialStateUser, action) => {
  if (action.type === 'SET_USERNAME') {
    return {
      ...state,
      username: action.payload
    }
  } if (action.type === 'GET_USER'){
    return {
      ...state, 
      users: action.payload
    }
  }else {
    return state
  }
}
export default userReducer