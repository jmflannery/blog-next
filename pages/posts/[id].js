import * as api from '../../src/api';
import Blog from '../../src/components/blog/blog';
import Posts from '../../src/components/posts/posts';
import {loginWithToken} from '../../src/actions/sessions';

const PostPage = props => {
  const {posts, post, currentUser, token} = props;

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <Blog title={post.title} currentUser={currentUser} token={token}>
      <Posts
        currentUser={currentUser}
        token={token}
        posts={posts}
        post={post}
      />
    </Blog>
  );
};

PostPage.getInitialProps = async ctx => {
  const slug = ctx.query.id;
  const [currentUser, token] = await loginWithToken(ctx);
  const {posts} = await api.posts.get(token);
  const {post} = await api.post.get(slug, token);
  return {
    post,
    posts,
    currentUser,
    token,
  };
};

export default PostPage;
