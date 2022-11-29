import React from "react";
import banner from '../../images/banner.jpg'
import ProfileDetails from "./profile_details";
import BlogInProfile from "./BlogInProfile";
import CreatePostFromProfile from "./CreatePostFromProfile";
import '../../css/profile_details.css';
const Home =() =>{
    return(
    <div className="container">
        <div className="row">
        <img alt=""  src={banner} className="cover_img" />
        <ProfileDetails/>
        <div class="row">
          <div class="profile_info">
            
                <BlogInProfile/>
                <CreatePostFromProfile/>
            </div></div>
        </div>

    </div>
    )
}

export default Home;