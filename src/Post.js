import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <ol className="post">
          <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        {/* <p className="postDate">{post.datetime}</p> */}
      </Link>
      <p className="postBody">
               {post.body.length <= 150 ? post.body : `${post.body.slice(0, 150)}...`}
      </p>
    </ol>
  );
};

export default Post;
