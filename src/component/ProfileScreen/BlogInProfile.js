import '../../css/profile_details.css';
import blog from '../../images/blog.jpg'
import blog1 from '../../images/blog2.jpg'

const BlogInProfile =() =>{
    return(
        <div class="col-xs-12 col-sm-12 col-md-5 mt-3">
        <div class="info_col">
          <div class="profile_intro">
            <h3>Intro</h3>
            <p class="intro_text">
              profile details <i class="fa-solid fa-face-smile"></i>
            </p>
            <hr />
            <ul>
              <li>
                <i class="fa-solid fa-briefcase"></i> Works at Web
                developer
              </li>
              <li><i class="fa-solid fa-graduation-cap"></i>Studies</li>
              <li><i class="fa-solid fa-house-chimney"></i>school</li>
              <li><i class="fa-solid fa-location-dot"></i>India</li>
            </ul>
          </div>

          <div class="profile_intro">
            <div class="title_box">
              <h3>Photo</h3>
              <a href="">All Photo</a>
            </div>

            <div class="photo_box">
              <div>
                <img src={blog} />
                <img src={blog1} />
                <img src={blog} />
                <img src={blog1} />
                <img src={blog} />
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
}
export default BlogInProfile;