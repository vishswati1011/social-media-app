import React, { useRef } from 'react';
import { FcCalendar } from 'react-icons/fc'

const FileUploader = () => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        console.log("click")
        hiddenFileInput.current.click();
    };
    return (
        <>

            <FcCalendar data-toggle="modal" data-target="#exampleModal" onClick={handleClick} /> Event
            <input type="file" style={{ display: 'none' }} ref={hiddenFileInput} />

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create an event</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-left">
                            <div className=''></div>
                            <div className='mb-3'>Event Type  </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input active" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Online</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">In Person</label>
                            </div>

                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Event Name *</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Timezone </label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="exampleInputPassword1">Start Date </label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                <div class="form-group col-md-6">

                                    <label for="exampleInputPassword1">End Date </label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                </div>
                               
                            </form>

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