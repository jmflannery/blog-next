import * as api from '../../src/api';
import Blog from '../../src/components/blog/blog';
import Posts from '../../src/components/posts/posts';
import {loginWithToken} from '../../src/actions/sessions';

const Index = (props) => {
  if (!props.posts) {
    return <div>Loading...</div>;
  }

  return (
    <Blog
      title="Jack's Blog"
    >
      <Posts
        posts={props.posts}
      />
    </Blog>
  );
};

export async function getStaticProps({params, preview = false}) {
  const {posts} = await api.posts.get();
  return {
    props: {
      posts,
    },
  };
}

export default Index;
