import Router from 'next/router';
import {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import * as api from '../api';

const AdminControls = (props) => {
  const {token} = props;
  const [post, setPost] = useState(props.post);

  // useEffect(() => {}, [post]);

  const publishedClass = `post-control publish-button${
    post.published_at ? ' published' : ''
  }`;

  const onPublish = async () => {
    const newPost = await api.posts.publish(post.id, token);
    setPost(newPost);
  };

  const onUnpublish = async () => {
    const newPost = await api.posts.unpublish(post.id, token);
    setPost(newPost);
  };

  const onDelete = () => {
    api.posts.del(post.id, token);
    Router.push('/');
  };

  return (
    <div className="post-controls">
      <div className={publishedClass}>
        {post.published_at ? (
          <FontAwesomeIcon icon={faEye} onClick={onUnpublish} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} onClick={onPublish} />
        )}
      </div>
      <div className="post-control">
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="post-control delete" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default AdminControls;
