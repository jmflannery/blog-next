import * as api from '../src/api/api';
import Blog from '../src/components/blog/blog';
import Posts from '../src/components/posts/posts';

const Index = (props) => {
  if (!props.posts) {
    return <div>Loading...</div>
  }

  return (
    <Blog>
      <Posts posts={props.posts} />
    </Blog>
  );
};

Index.getInitialProps = async () => {
  const posts = await api.posts.get();
  return posts;
};

export default Index;
