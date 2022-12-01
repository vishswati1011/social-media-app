import React, { useState } from "react";
import Profile from './Profile';
import Blog from './Blog'
import '../../css/Home.css';
import Details from './Details';
const Home =() =>{

    const [userName,setUserName]=useState("Swati Vishwakarma")
    return(
        <div class="container">
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 ">
        <div class="sidebar">  
          <Profile username={userName}/>
          </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6">
            <Blog username={userName}/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3">
        <div class="sidebar detail_css"> 
         <Details/>
         </div>
         </div>
        </div>

    </div>
    )
}

export default Home;