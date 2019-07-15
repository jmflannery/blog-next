import { useRouter } from 'next/router';
import * as api from '../../src/api/api';
import Blog from '../../src/components/blog/blog';
import Posts from '../../src/components/posts/posts';

const PostPage = (props) => {
  const router = useRouter();

  if (!props.posts) {
    return <div>Loading...</div>
  }

  const post = props.posts.find(p => p.slug === router.query.id);

  return (
    <div>
      <Blog>
        <Posts posts={props.posts} post={post} />
      </Blog>
    </div>
  );
};

PostPage.getInitialProps = async () => {
  const posts = await api.posts.get();
  return posts;
};

export default PostPage;
