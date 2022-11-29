import React from "react";
import Profile from './Profile';
import Main from './Main'
import './profil_details.css';
import Details from './Details'
const Home =() =>{
    return(
    <div className="container home_css">
        <div className="row">
            <div className="col-md-3"><Profile/></div>
            <div className="col-md-6"><Main/></div>
            <div className="col-md-3"><Details/></div>
        </div>

    </div>
    )
}

export default Home;