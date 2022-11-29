import React ,{useState}from "react";

const Details = () => {

    const [show,setShow]=useState(false)
    
  
    return (
            <div class="card " style={{ width: "18rem" }} className="text-left">
                <ul class="list-group">
                    <li class="list-group-item">Linkedin News</li>
                    <li class="list-group-item">Which sector are hiring in India</li>
                    <li class="list-group-item">Fresher hiring on upswing</li>
                </ul>

                <div class="card-header" id="headingThree">
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            <ul class="list-group">

                                <li class="list-group-item">New degignation for study abroad</li>
                                <li class="list-group-item">SaaS players remain upbeat</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item" data-toggle="collapse" onClick={()=>setShow(!show)}data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            {!show?"show more " :"show less"}
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Details;