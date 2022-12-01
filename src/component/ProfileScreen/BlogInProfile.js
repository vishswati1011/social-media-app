import '../../css/profile_details.css';
import blog from '../../images/blog.jpg'
import blog1 from '../../images/blog2.jpg'

const BlogInProfile =({profileIntro}) =>{
  const {school,degree,jobDescription,address,photos}=profileIntro;
  console.log("Blogpage",profileIntro)
    return(
        <div class="col-xs-12 col-sm-12 col-md-5 mt-3">
        <div class="info_col">
          <div class="profile_intro">
            <h3>Intro</h3>
            <p class="intro_text">
              Profile Details <i class="fa-solid fa-face-smile"></i>
            </p>
            <hr />
            <ul>
              <li>
                <i class="fa-solid fa-briefcase"></i> {jobDescription}
              </li>
              <li><i class="fa-solid fa-graduation-cap"></i>{degree}</li>
              <li><i class="fa-solid fa-house-chimney"></i>{school}</li>
              <li><i class="fa-solid fa-location-dot"></i>{address}</li>
            </ul>
          </div>

          <div class="profile_intro">
            <div class="title_box">
              <h3>Photos</h3>
              <a href="">All Photos</a>
            </div>

            <div class="photo_box">
              <div>
                { photos && photos.map((image)=>(<img key={image.p_id} src={image.p_url} />))}
              
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
}
export default BlogInProfile;