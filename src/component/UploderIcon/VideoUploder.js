import React, { useRef } from 'react';
import { FcVideoCall } from 'react-icons/fc'

const FileUploader = () => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        console.log("click")
        hiddenFileInput.current.click();
    };
    return (
        <>
            <FcVideoCall   data-toggle="modal" data-target="#videoModal" 
            onClick={handleClick}
            /> Video
            <input type="file" style={{ display: 'none' }} ref={hiddenFileInput} />
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Select/Edit your video</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <a type="href"  onClick={handleClick} ><p class="text text-primary">Select video to share</p></a>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary" style={{borderRadius:"20px"}} data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-outline-secondary" style={{borderRadius:"20px"}}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FileUploader;