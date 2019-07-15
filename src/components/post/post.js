import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import './post.scss';

const Post = (props) => {
  return (
    <div>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <article>
        <div className="article-header">
          <h1>{props.post.title}</h1>
          <div>
            <span className="by">by</span>
            <span className="post-author">Jack Flannery</span>
            <span className="feather">
              <i className="fas fa-feather"></i>
            </span>
            <span className="post-date">
              {props.post.published_at}
            </span>
          </div>
        </div>
        <ReactMarkdown source={props.post.content} className="article-content" />
      </article>
    </div>
  );
}

export default Post;
