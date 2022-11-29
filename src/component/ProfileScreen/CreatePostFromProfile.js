import '../../css/profile_details.css';
import profile_image from '../../images/images.jpeg'
import blog from '../../images/blog.jpg'
import blog1 from '../../images/blog2.jpg'
const CreatePostFromProfile =() =>{
    return(
        
      
      <div class="col-xs-12 col-sm-12 col-md-7">
      <div class="post_col">
        <div class="my_post">
          <div class="post_top">
            <img src={profile_image} />
            <input
              type="text"
              placeholder="What's on you mind, John?"
            />
          </div>
          <hr />
          <div class="post_bottom">
            <div class="post_icon">
              <i class="fa-solid fa-video red"></i>
              <p>Live video</p>
            </div>

            <div class="post_icon">
              <i class="fa-solid fa-images green"></i>
              <p>Photo/video</p>
            </div>

            <div class="post_icon">
              <i class="fa-regular fa-face-grin yellow"></i>
              <p>Feeling/activity</p>
            </div>
          </div>
        </div>

        <div class="friends_post">
          <div class="friend_post_top">
            <div class="img_and_name">
              <img src={blog} />
              <div class="friends_name">
                <p class="friends_name">Jhon</p>
                <p class="time">
                  16h.<i class="fa-solid fa-user-group"></i>
                </p>
              </div>
            </div>
            <div class="menu">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>

          <img src={blog1} />
          <div class="info">
            <div class="emoji_img">
              <img src={blog} />
              <img src={blog1} />
              <img src={blog} />
              <p>You, John and 25K others</p>
            </div>

            <div class="comment">
              <p>421 Comments</p>
              <p>1.3K Shares</p>
            </div>
          </div>

          <hr />
          <div class="like">
            <div class="like_icon">
              <i class="fa-solid fa-thumbs-up activi"></i>
              <p>Like</p>
            </div>

            <div class="like_icon">
              <i class="fa-solid fa-message"></i>
              <p>Comments</p>
            </div>

            <div class="like_icon">
              <i class="fa-solid fa-share"></i>
              <p>Share</p>
            </div>
          </div>

          <hr />

          <div class="comment_warpper">
            <img src={blog} />
            <div class="circle"></div>
            <div class="comment_search">
              <input type="text" placeholder="Write a comment" />
              <i class="fa-regular fa-face-smile"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-regular fa-note-sticky"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default CreatePostFromProfile;