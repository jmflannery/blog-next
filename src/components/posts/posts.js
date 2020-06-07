import PostList from '../post-list/post-list';
import Post from '../post/post';
import styles from './Posts.module.scss';

const Posts = props => (
  <div className={styles.posts}>
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
