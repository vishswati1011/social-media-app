import React from "react";
import Profile from './Profile';
import Blog from './Blog'
import '../../css/Home.css';
import Details from './Details';
const Home =() =>{
    return(
        <div class="container">
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 ">
        <div class="sidebar">  
          <Profile/>
          </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-6">
            <Blog/>
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