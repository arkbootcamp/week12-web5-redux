import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from '../configs/redux/actions'

function Detail() {
  const dispatch = useDispatch()
  const userState = useSelector((state)=> state.user)
  useEffect(()=>{
    dispatch(getUser())
  }, [])
  return (
    <div>
      <h1>halaman detail</h1>
      {
        userState.users.map((user)=>
        <h4 key={user.id}>{user.name}</h4>
        )
      }
    </div>
  )
}

export default Detail
