import React from 'react';


const UserProfile = ({avatar, name, title}) => {
  return(
    <div className="col-md-12">
      <img src={avatar} className="img-circle img-perfil" />
      <p className='title-project'>{title}</p>
      <h4 className='mg-10'>by <span className='author'>{name}</span></h4>      
    </div>
  )
}

export default UserProfile;
