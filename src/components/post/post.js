import ReactMarkdown from 'react-markdown';
import {format} from 'date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFeather} from '@fortawesome/free-solid-svg-icons';
import AdminControls from '../../components/admin-controls';
import styles from './Post.module.scss';

const Post = ({post, currentUser, token}) => {
  return (
    <article className={styles.article}>
      <div className={styles['article-header']}>
        {currentUser && token && <AdminControls post={post} token={token} />}
        <h1>{post.title}</h1>
        <div>
          <span className={styles.by}>by</span>
          <span className={styles['post-author']}>Jack Flannery</span>
          <span className={styles.feather}>
            <FontAwesomeIcon icon={faFeather} />
          </span>
          <span className={styles['post-date']}>
            {format(new Date(post.published_at), 'yyyy MMMM d')}
          </span>
        </div>
      </div>
      <ReactMarkdown
        source={post.content}
        className={styles['article-content']}
      />
    </article>
  );
};

export default Post;
