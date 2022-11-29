import React from "react"
import '../../css/profile_details.css';
import profile_image from '../../images/images.jpeg'

const ProfileDetails = ()=>{
    return(
        <> <div className="row ml-0"> 
        <div className="profile_details">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="pd_left">
              <div className="pd_row">
                <img  alt="" src={profile_image} className="pd_img" />
                <div>
                  <h3>Name</h3>
                  <p>120 friends - 10 mutual</p>
                  <img alt="/"  src={profile_image} />
                  <img alt="/"  src={profile_image} />
                  <img alt="/"  src={profile_image} />
                  <img alt="/"  src={profile_image} />
                  <img alt="/"  src={profile_image} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pd_right">
              <button type="button">
                <i className="fa-solid fa-plus"></i>Add to Story
              </button>
              <button type="button">
                <i className="fa-solid fa-pen-to-square"></i>Edit profile
              </button>
             
            </div>
          </div>
        </div>
        </div>
        </>
    )
}

export default ProfileDetails;