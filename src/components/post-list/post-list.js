import PostListItem from './post-list-item';

const PostList = (props) => {

  if (!props.posts) {
    return <div>Loading...</div>
  }
  return (
    <nav>
      {props.posts.map(post => <PostListItem post={post} key={post.id} />)}
    </nav>
  );
};

export default PostList;
