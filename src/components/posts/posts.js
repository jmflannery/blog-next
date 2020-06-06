import PostList from '../post-list/post-list';
import Post from '../post/post';
import './posts.scss';

const Posts = (props) => (
  <div className="posts">
    <PostList posts={props.posts} />
    {props.post && (
      <Post
        post={props.post}
        currentUser={props.currentUser}
        token={props.token}
      />
    )}
  </div>
);

export default Posts;
