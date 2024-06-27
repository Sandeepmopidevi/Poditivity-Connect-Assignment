import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPost = ({ posts, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleDelete = () => {
    onDelete(post.id);
    navigate('/');
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>By {post.author} on {post.date}</p>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${post.id}`}>Edit</Link>
    </div>
  );
};

export default BlogPost;
