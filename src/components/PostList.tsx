import { Link } from "react-router-dom";

interface PostListProps {
  showNavigation?: boolean;
}

function PostList({ showNavigation = true }: PostListProps) {
  return (
    <>
      <div className="post-list">
        {showNavigation ? (
          <div className="post-navigation">
            <div className="post-navigation__active">ALL</div>
            <div>MY POST</div>
          </div>
        ) : null}

        <div>
          {[...Array(10)].map((value, index) => (
            <Link to={`/posts/${index}`} key={index}>
              <div className="post-box">
                <div className="post-profile">
                  <div className="post-profile_image"></div>
                  <div className="post-profile_userName">userEmail.com</div>
                  <div className="post-profile_date">
                    2023.09.05 오전 10:35:00
                  </div>
                </div>

                <div className="post">
                  <div className="post_title">post title</div>
                  <div className="post_content">
                    The beauty of life lies in its unpredictability, embracing
                    each moment with an open heart and an adventurous spirit.
                  </div>
                </div>

                <div className="post-edit">
                  <button className="post-edit_delete">DELETE</button>
                  <button className="post-edit_edit">EDIT</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default PostList;
