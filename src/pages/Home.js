import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import { increment, decrement } from '../configs/redux/actions/count'
// import { setUsername as setname}from '../configs/redux/actions/users'
import { increment, decrement, setUsername as setname } from '../configs/redux/actions'

function Home() {
  const stateCount = useSelector(state => state.count)
  const stateUser = useSelector(state => state.user)
  const [username, setUsername] = useState('')
  const dispacth = useDispatch()
  const handleChange = () =>{
    dispacth(setname(username))
    setUsername('')
  }

  return (
    <div>
      <h1>halaman home</h1>
      <h2>username = {stateUser.username}</h2>
      <h2>nilai count = {stateCount.count}</h2>
      <h3>username local = { username}</h3>
      <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/> 
      <button onClick={handleChange}>edit username</button>
      <br /><br /><br />
      <button onClick={() => dispacth(increment())}>Increment</button>
      <button onClick={() => stateCount.count > 0 && dispacth(decrement())}>Decrement</button>
    </div>
  )
}

export default Home
