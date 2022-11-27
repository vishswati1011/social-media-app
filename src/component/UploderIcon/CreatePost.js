import React, { useState, useRef } from 'react';
import profile_image from '../../images/images.jpeg'
import '../../css/CreatePost.css'
import EmojiPicker from 'emoji-picker-react';
import EmojiSelect from './EmojiPicker'
import { FaHireAHelper, FaPoll } from 'react-icons/fa'
import { CgFileDocument } from 'react-icons/cg'
import { MdOutlineAddAPhoto, MdCelebration } from 'react-icons/md'
import { FiVideo } from 'react-icons/fi'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
const FileUploader = () => {
    const hiddenFileInput = React.useRef(null);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClickSelect = event => {
        console.log("click")
        hiddenFileInput.current.click();
    };
    const [input, setInput] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);

    const handleClick = (event) => {
        setShowEmojis(!showEmojis);
        setTarget(event.target);
    };
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
                            <OverlayTrigger
                                trigger="click"
                                key="left-start"
                                placement="left-start"
                                overlay={
                                    <Popover id={`popover-positioned-left-start`}>
                                        <EmojiPicker />
                                    </Popover>
                                }
                            >
                                <button className="button" onClick={() => handleClick()}>
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
                            </OverlayTrigger>
                            {/* <div ref={ref} style={{ height: "150px" }}>
                                <button className="button" onClick={() => handleClick()}>
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
                            )} */}



                            <div className='multiple_select'>
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            Add a photo
                                        </Tooltip>
                                    }
                                >
                                    <div><MdOutlineAddAPhoto className='all_icon' /></div>

                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="top"
                                    variant="light"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                           Add a Video
                                        </Tooltip>
                                    }
                                >
                                    <div>   <FiVideo className='all_icon' /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="top"
                                    variant="light"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                           Add a document
                                        </Tooltip>
                                    }
                                >
                                    <div>   <CgFileDocument className='all_icon' /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="top"
                                    variant="light"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            Share that you'r hire
                                        </Tooltip>
                                    }
                                >
                                    <div>     <FaHireAHelper className='all_icon' /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="top"
                                    variant="light"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                           Celebrate an occasion
                                        </Tooltip>
                                    }
                                >
                                    <div>  <MdCelebration className='all_icon' /></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="top"
                                    variant="light"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                            Create a Poll
                                        </Tooltip>
                                    }
                                >
                                    <div>    <FaPoll className='all_icon' /></div>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    key="top"
                                    variant="light"
                                    placement="top"
                                    overlay={
                                        <Tooltip id={`tooltip-top`}>
                                           Add to your post
                                        </Tooltip>
                                    }
                                >
                                    <div> <b className='all_icon'>...</b></div>
                                </OverlayTrigger>


                                <p className='any_one'> | Anyone</p>
                                <button type="button" className="btn btn-outline-secondary post_button text-center" style={{ borderRadius: "20px" }}>
                                    <p style={{ fontSize: '10px' }}>Post</p></button>
                                {/* <p className='any_one'> Post</p>   */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FileUploader;