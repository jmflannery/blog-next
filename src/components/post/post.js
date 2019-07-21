import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEdit, faTrashAlt, faFeather } from '@fortawesome/free-solid-svg-icons';
import './post.scss';

const Post = (props) => {
  let publishedClass = `post-control publish-button${props.post.published_at ? ' published' : ''}`
  return (
    <article>
      <div className="article-header">
        {props.currentUser && props.token &&
          <div className="post-controls">
            <div className={publishedClass}>
              {props.post.published_at ?
                <FontAwesomeIcon icon={faEye} /> :
                <FontAwesomeIcon icon={faEyeSlash} />}
            </div>
            <div className="post-control" >
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="post-control delete">
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>}
        <h1>{props.post.title}</h1>
        <div>
          <span className="by">by</span>
          <span className="post-author">Jack Flannery</span>
          <span className="feather">
            <FontAwesomeIcon icon={faFeather} />
          </span>
          <span className="post-date">
            {props.post.published_at}
          </span>
        </div>
      </div>
      <ReactMarkdown source={props.post.content} className="article-content" />
    </article>
  );
}

export default Post;
