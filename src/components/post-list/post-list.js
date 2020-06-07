import PostListItem from './post-list-item.js';

const PostList = ({posts}) => {
  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <nav>
      {posts.map(post => (
        <PostListItem post={post} key={post.id} />
      ))}
    </nav>
  );
};

export default PostList;
