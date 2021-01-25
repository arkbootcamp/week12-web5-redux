// export const increment = () =>{
//   return setTimeout(() => {
//     return { type: 'INCREMENT' }
//   }, 2000);
// }

export const increment = () => {
  return (dispatch)=>{
    setTimeout(() => {
      dispatch({ type: 'INCREMENT' })
    }, 2000);
  } 
}

export const decrement = () =>{
  return {type: 'DECREMENT'}
}
