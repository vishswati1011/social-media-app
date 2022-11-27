import React, { useState } from 'react';
import profile_image from '../../images/images.jpeg'
import '../../css/CreatePost.css'
import EmojiPicker from 'emoji-picker-react';
import EmojiSelect from './EmojiPicker'
import { FaHireAHelper,FaPoll } from 'react-icons/fa'
import {CgFileDocument} from 'react-icons/cg'
import {MdOutlineAddAPhoto,MdCelebration} from 'react-icons/md'
import {FiVideo} from 'react-icons/fi'

const FileUploader = () => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        console.log("click")
        hiddenFileInput.current.click();
    };
    const [input, setInput] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);

    return (
        <>
          
            <div>
                <input type="text" class="form-control"
                    id="exampleInputEmail1"
                    data-target="#createPostModal"
                    data-toggle="modal"
                    className="post_input" placeholder="Share a post" /></div>
            <div class="modal fade" id="createPostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create a post</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-left">
                            <div><img className="image_Css " src={profile_image} alt="" />   Swati Vishwakarma  </div>
                            <div>
                                <textarea className='text_css' style={{ border: "none" }} placeholder="What do you want to talk about?" />

                            </div>
                            <div>
                                <button className="button" onClick={() => setShowEmojis(!showEmojis)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {showEmojis && (
                                <div>
                                   <EmojiPicker />
                                </div>
                            )}

                            <div className='multiple_select'>
                                 <MdOutlineAddAPhoto className='all_icon'/>
                                 <FiVideo className='all_icon'/> 
                                 <CgFileDocument className='all_icon'/>
                                 <FaHireAHelper className='all_icon'/>
                                 <MdCelebration className='all_icon'/>
                                 <FaPoll className='all_icon'/> <p className='any_one'> | Anyone</p>    
                                <button type="button" className="btn btn-outline-secondary any_one" style={{ borderRadius: "20px",marginLeft:'20px' }}>Post</button>
                            </div>
                            
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary" style={{ borderRadius: "20px" }} data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-outline-secondary" style={{ borderRadius: "20px" }}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FileUploader;