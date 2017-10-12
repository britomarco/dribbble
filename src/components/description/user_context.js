import React from 'react';

const UserContext = ({hidpi, normal, description, views_count, likes_count}) => {
  return(
    <div>
    <div className="user-context">
      <div className="image-hidpi col-md-7 col-xs-12">
        <img src={hidpi ? hidpi : normal} className="img-rounded" />
      </div>
    </div>

<div className="col-md-5 mg-top-50">
<p className='col-xs-6 align-icons'><i className="glyphicon glyphicon-eye-open glyphicon-color"></i> <span className="mg-left-20">{views_count} views</span></p>
<hr/>
  <p className='col-xs-6 align-icons'><i className="glyphicon glyphicon-heart glyphicon-color"></i> <span className="mg-left-20">{likes_count} likes</span></p>
 </div> 
 <div className="content col-md-12" dangerouslySetInnerHTML={{__html: description}}></div>
 </div>
  )
}

export default UserContext;
