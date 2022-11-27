import React from "react";
import profile_image from '../images/images.jpeg'
import VideoUpload from './UploderIcon/VideoUploder'
import PhotoUpload from './UploderIcon/PhotoUploder';
import EventUploader from  './UploderIcon/EventUploder'
import { MdArticle } from 'react-icons/md';
import CreatePost from './UploderIcon/CreatePost'
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
            

        </div>
    )
}

export default Home;