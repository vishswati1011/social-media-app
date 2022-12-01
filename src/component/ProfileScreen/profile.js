import React, { useEffect, useState } from "react";
import banner from '../../images/banner.jpg'
import ProfileDetails from "./profile_details";
import BlogInProfile from "./BlogInProfile";
import CreatePostFromProfile from "./CreatePostFromProfile";
import '../../css/profile_details.css';
import { useParams } from "react-router-dom";
import BlogData from "../Data/BlogData";
const Profile =() =>{

    const {profile_id}=useParams()
    const [profileIntro,setProfileIntro]=useState()
    const [username,setUsename]=useState("")
    const [friends,setFriends]=useState("")
    const [profileImage,setProfileImage]=useState("");
    const [friendPhoto,setFriendsPhoto]=useState();

    useEffect (()=>{
        var useData=BlogData.find((data)=>data.id==profile_id);
        console.log(useData,"useData");
        setProfileIntro({
            school:useData.school,
            degree:useData.degree,
            jobDescription:useData.jobDescription,
            address:useData.address,
            photos:useData.photos
        })
        setUsename(useData.name);
        setFriends(useData.friends);
        setProfileImage(useData.profileImageUrl);
        setFriendsPhoto(useData.friend_photos)

    },[])
    console.log(friendPhoto,"friendPhoto")

    return(
    <div className="container">
        {profileImage && profileImage ?
        <ProfileDetails username={username}
         friends={friends}
          profileImage={profileImage}
           friendPhoto={friendPhoto}
        />:null}
        <div class="row">
          <div class="profile_info">
            
              {profileIntro && profileIntro?  <BlogInProfile profileIntro={profileIntro} />:null}
              {profileImage ?  <CreatePostFromProfile  profileImage={ profileImage}/>:null}
            </div></div>
        {/* </div> */}

    </div>
    )
}

export default Profile;