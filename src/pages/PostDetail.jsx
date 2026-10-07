import { Link, useParams } from "react-router-dom";
import { getPost, formatDate } from "../lib/posts";
import usePageTitle from "../lib/usePageTitle";
import NotFound from "./NotFound";

export default function PostDetail() {
  const { slug } = useParams();
  const post = getPost(slug);
  usePageTitle(post?.title);
  if (!post) return <NotFound />;

  return (
    <article className="article">
      <Link to="/posts" className="more">← All posts</Link>
      <div className="post-meta article-meta">
        <span className="tag">{post.category}</span>
        <span>{formatDate(post.date)}</span>
        <span>· {post.readMinutes} min read</span>
      </div>
      <h1>{post.title}</h1>
      {post.summary && <p className="lede">{post.summary}</p>}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
