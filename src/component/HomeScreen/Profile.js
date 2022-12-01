import React from "react";
import '../../css/Profile.css';
import profile_image from '../../images/images.jpeg'
import { NavLink } from "react-router-dom";

const Profile =(props) =>{ 
    return(
      <div class="col-xs-12 col-sm-12 col-md-6 ">
      
        <div className="card profile">
            <div class="image_div ">
              <NavLink to={`/profile_details/5`}>
              <img className=" image_profile" src={profile_image} alt=""/>
            </NavLink>
            </div>
        <div class="card-body mt-5">
          <h6 class="card-title">{props.username}</h6>
          <p class="card-text">Project Lead Developer at Appsdeployer | MERN Full-Stack-Developer</p>
        </div>
        <ul class="list-group list-group-flush text-left">
            
        <li class="list-group-item d-flex justify-content-between">Connections
           <span class="badge badge-primary badge-pill">60</span></li>
          <li class="list-group-item d-flex justify-content-between">Grow your network
           <span class="badge badge-primary badge-pill">14</span></li>
          <li class="list-group-item">Vestibulum at eros</li>
          <li class="list-group-item">Access exclusive tooks & insights</li>
          <li class="list-group-item">My items</li>
        </ul>
       
      </div>
      </div>
    )
}

export default Profile;