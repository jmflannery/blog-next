import PostList from '../post-list/post-list';
import Post from '../post/post';
import './posts.scss';

const Posts = (props) => (
  <div className="posts">
    <PostList posts={props.posts} />
    {props.post ? <Post post={props.post} /> : null}
  </div>
);

export default Posts;
