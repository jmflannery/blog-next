import { useRouter } from 'next/router';
import * as api from '../../src/api/api';
import Blog from '../../src/components/blog/blog';
import Posts from '../../src/components/posts/posts';
import { loginWithToken } from '../../src/actions/sessions';

const PostPage = (props) => {
  const router = useRouter();

  if (!props.posts) {
    return <div>Loading...</div>
  }

  const post = props.posts.find(p => p.slug === router.query.id);

  return (
    <Blog title={post.title} currentUser={props.currentUser} token={props.token}>
      <Posts posts={props.posts} post={post} />
    </Blog>
  );
};

PostPage.getInitialProps = async (ctx) => {
  const [currentUser, token] = await loginWithToken(ctx);
  const { posts } = await api.posts.get(token);
  return {
    posts,
    currentUser,
    token,
  };
};

export default PostPage;
