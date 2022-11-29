import React from "react";
import profile_image from '../images/images.jpeg'
import VideoUpload from './UploderIcon/VideoUploder'
import PhotoUpload from './UploderIcon/PhotoUploder';
import EventUploader from  './UploderIcon/EventUploder'
import { MdArticle } from 'react-icons/md';
import CreatePost from './UploderIcon/CreatePost'
import blog from "../images/blog.jpg"
import './Main.css'
const Home = () => {
    return (
        <div className="main_outer">

            <img className="image_Css " src={profile_image} alt="" />
            <CreatePost/>
            <div className="list_main">
                <div class="list_Css"><PhotoUpload/> </div>
                <div class="list_Css"><VideoUpload/> </div>
                <div class="list_Css"><EventUploader/></div>
                <div class="list_Css"><MdArticle color="red" />Write article</div>
            </div>



            
        <div className="col-xs-12 col-sm-12 col-md-12 mt-5">
         
          <div className="feed"> 
            <div className="card text-center mb-3">
              <div className="card-header card-myheader">
                <div className="post__header">
                  <img src={profile_image} className="user" />
                  <div className="post__info">
                    <h2>name</h2>
                    <p>Job Description</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <img src={blog}  className="img-fluid" alt="Responsive image" />
              </div>
              <div className="card-footer">
                <div className="feed__inputOptions">
                  <div className="inputOption">
                    <i className="fa-solid fa-thumbs-up"></i>
                    <h5>Like</h5>
                  </div>
                  <div className="inputOption">
                    <i className="fa-regular fa-comment"></i>
                    <h5>Comment</h5>
                  </div>
                  <div className="inputOption">
                    <i className="fa-solid fa-share"></i>
                    <h5>Share</h5>
                  </div>
                  <div className="inputOption">
                    <i className="fa-solid fa-paper-plane"></i>
                    <h5>Send</h5>
                  </div>
                </div>
              </div>
            </div> 
           
             
          </div>
        </div>



        </div>
    )
}

export default Home;