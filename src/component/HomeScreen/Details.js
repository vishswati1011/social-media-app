import React ,{useState}from "react";
import newsData from '../Data/NewsList'
const Details = () => {

    const [show,setShow]=useState(false)
    
  
    return (
            <div class="card " style={{ width: "18rem" }} className="text-left">
                <ul class="list-group">
                <li class="list-group-item"><b>Linkedin News</b></li>
                    {newsData.top_news && newsData.top_news.map((data,key)=>(
                       <li class="list-group-item">{data.news}</li>
                    ))}
                </ul>

                <div class="card-header" id="headingThree">
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            <ul class="list-group">
                            {newsData.otherNew && newsData.otherNew.map((data,key)=>(
                       <li class="list-group-item">{data.news}</li>
                    ))}
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