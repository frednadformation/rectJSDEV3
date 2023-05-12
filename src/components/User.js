import React from 'react'
import { UserConsumer } from './UserContext'

function User() {
  return (
    
    <UserConsumer>
      {username =>{
        return <div>Hello {username}</div>
      }}
    </UserConsumer>
  )
}

export default User 