import ReactMarkdown from 'react-markdown';
import {format} from 'date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFeather} from '@fortawesome/free-solid-svg-icons';
import AdminControls from '../../components/admin-controls';
import './post.scss';

const Post = ({post, currentUser, token}) => {
  return (
    <article>
      <div className="article-header">
        {currentUser && token && <AdminControls post={post} token={token} />}
        <h1>{post.title}</h1>
        <div>
          <span className="by">by</span>
          <span className="post-author">Jack Flannery</span>
          <span className="feather">
            <FontAwesomeIcon icon={faFeather} />
          </span>
          <span className="post-date">
            {format(new Date(post.published_at), 'yyyy MMMM d')}
          </span>
        </div>
      </div>
      <ReactMarkdown source={post.content} className="article-content" />
    </article>
  );
};

export default Post;
