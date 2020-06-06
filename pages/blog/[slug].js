import * as api from '../../src/api';
import Blog from '../../src/components/blog/blog';
import Posts from '../../src/components/posts/posts';

const BlogPage = ({posts, post}) => {
  return (
    <Blog title={post?.title}>
      <Posts posts={posts} post={post} />
    </Blog>
  );
};

export async function getStaticProps({params}) {
  const {post} = await api.post.get(params.slug);
  const {posts} = await api.posts.get();
  return {
    props: {
      posts,
      post,
    },
  };
}

export async function getStaticPaths() {
  const {posts} = await api.posts.get();
  return {
    paths: posts.map((post) => ({params: {slug: post.slug}})),
    fallback: true,
  };
}

export default BlogPage;
