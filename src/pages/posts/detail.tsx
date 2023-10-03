import Page from "../../components/common/Pgae";

function PostsDetail() {
  return (
    <Page>
      <div className="post-detail">
        <div className="post-detail-box">
          <div className="post_title">post title</div>

          <div className="post-profile">
            <div className="post-profile_image"></div>
            <div className="post-profile_userName">userEmail.com</div>
            <div className="post-profile_date">2023.09.05 오전 10:35:00</div>
          </div>

          <div className="post_content">
            The beauty of life lies in its unpredictability, embracing each
            moment with an open heart and an adventurous spirit.
          </div>

          <div className="post"></div>

          <div className="post-edit">
            <button className="post-edit_delete">DELETE</button>
            <button className="post-edit_edit">EDIT</button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default PostsDetail;
