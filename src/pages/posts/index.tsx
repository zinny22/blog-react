import Page from "../../components/common/Pgae";
import PostList from "../../components/PostList";

function PostsPage() {
  return (
    <Page>
      <PostList showNavigation={false} />
    </Page>
  );
}

export default PostsPage;
