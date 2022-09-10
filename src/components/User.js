import React from 'react'


const User = (props) => {

  const {id, name} = props.user;  
  return (    
      <img src={`../images/img${id}.jpg`} />
  )
}

export default User