import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UserContext } from '../../context/UserContext'

const Profile = () => {
  // const [name, setName] = useState('No user');
  const { user } = useContext(UserContext);
  
  return (
    <div>
      User is : {user||'No user'}
    </div>
  )
}

export default Profile; 