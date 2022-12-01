import React, { useState } from "react";
import profile_image from '../../images/images.jpeg'
import VideoUpload from '../UploderIcon/VideoUploder'
import PhotoUpload from '../UploderIcon/PhotoUploder';
import EventUploader from  '../UploderIcon/EventUploder'
import { MdArticle } from 'react-icons/md';
import CreatePost from '../UploderIcon/CreatePost'
import blog from "../../images/blog.jpg"
import '../../css/Main.css'
import BlogData from "../Data/BlogData";
import { NavLink,Link } from "react-router-dom";
const Blog = (props) => {

    const [blogs,setBlogs]=useState(BlogData);
    const handleLike =(key,valuelike) =>{

    console.log(valuelike,"valuelike")
     
       var updatelike= blogs.map(blog=>      
        blog.id===key?{...blog,like:valuelike?blog.like-1 :blog.like+1,liked:!blog.liked}  
        :blog   
      )
    setBlogs(updatelike);
    console.log(blogs,"valuelike")
}
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

            
        {blogs && blogs.map((item,key)=>{
        
        return(
          props.username!=item.name?
        <div className="col-xs-12 col-sm-12 col-md-12 mt-5" key={key}>
         
          <div className="feed"> 
            <div className="card text-center mb-3">
                <NavLink to={`/profile_details/${item.id}`}>

              <div className="card-header card-myheader">
                <div className="post__header">
                  <img src={item.profileImageUrl} className="user" />
                  <div className="post__info">
                    <h2   className="username">{item.name}</h2>
                    <p   className="username">{item.jobDescription}</p>
                  </div>
                </div>
              </div>
                </NavLink>

              <div className="card-body">
                <h5 className="card-title">{item.blogTitle}</h5>
                <p className="card-text">
                  {item.blogDescription}
                </p>
                <img src={item.imageUrl}  className="img-fluid" alt="image" />
              </div>
            <div className="comment__section">
              <p>{item.like} likes</p>
              <p>{item.comment} comments</p>
              </div>
              <div className="card-footer">
                <div className="feed__inputOptions">
              
                  <div className="inputOption" onClick={()=>handleLike(item.id,item.liked)}>
                  <i className={item.liked?"fa-solid fa-thumbs-up active_like":"fa-solid fa-thumbs-up"}/>
                    <h5 className={item.liked?"active_like":""}>Like</h5>
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
        </div>:null
        )})}
        </div>
    )
}

export default Blog;