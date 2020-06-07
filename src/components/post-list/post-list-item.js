import Link from 'next/link';
import {format} from 'date-fns';
import styles from './PostListItem.module.scss';

const PostListItem = (props) => {
  return (
    <Link href="/blog/[slug]" as={`/blog/${props.post.slug}`}>
      <a className={styles['post-list-item']}>
        <div className={styles['post-title']}>{props.post.title}</div>
        <div className={styles['post-date']}>
          {format(new Date(props.post.published_at), 'yyyy MMMM d')}
        </div>
      </a>
    </Link>
  );
};

export default PostListItem;
