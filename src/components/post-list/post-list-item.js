import Link from 'next/link';
import {format} from 'date-fns';
import './post-list-item.scss';

const PostListItem = props => {
  return (
    <Link href={`/posts/${props.post.slug}`}>
      <a className="post-list-item">
        <div className="post-title">{props.post.title}</div>
        <div className="post-date">
          {format(new Date(props.post.published_at), 'yyyy MMMM d')}
        </div>
      </a>
    </Link>
  );
};

export default PostListItem;
