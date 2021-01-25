import axios from 'axios'

export const setUsername = (params) =>{
  return {
    type: 'SET_USERNAME',
    payload: params
  }
}

// export const getUser = () =>{
//   return (dispatch)=>{
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>{
//       dispatch({type: 'GET_USER', payload: res.data})

//     })
//   }
// }
export const getUser = () => (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        dispatch({ type: 'GET_USER', payload: res.data })
      })
  }