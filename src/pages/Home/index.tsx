import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <header>
        <div>
          <Link to="/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div className="post-list">Post List</div>
      <footer>
        <li>menu 1</li>
        <li>menu 2</li>
        <li>menu 3</li>
      </footer>
    </>
  );
}

export default HomePage;
