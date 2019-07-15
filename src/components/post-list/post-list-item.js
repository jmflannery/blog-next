import Link from 'next/link';
import './post-list-item.scss';

const PostListItem = (props) => {
  return (
    <Link href={`/posts/${props.post.slug}`}>
      <a className='post-list-item'>
        <div className="post-title">{props.post.title}</div>
        <div className="post-date">{props.post.published_at}</div>
      </a>
    </Link>
  );
};

export default PostListItem;