import * as api from '../src/api/api';
import Blog from '../src/components/blog/blog';
import Posts from '../src/components/posts/posts';
import { loginWithToken } from '../src/actions/sessions';

const Index = (props) => {
  if (!props.posts) {
    return <div>Loading...</div>
  }

  return (
    <Blog title="Jack's Blog" currentUser={props.currentUser} token={props.token}>
      <Posts currentUser={props.currentUser} token={props.token} posts={props.posts} />
    </Blog>
  );
};

Index.getInitialProps = async (ctx) => {
  const [currentUser, token] = await loginWithToken(ctx);
  const { posts } = await api.posts.get(token);
  return {
    posts,
    currentUser,
    token,
  };
};

export default Index;
