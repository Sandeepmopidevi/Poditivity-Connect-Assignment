import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogForm = ({ onSave, posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    author: '',
    content: '',
    date: ''
  });

  useEffect(() => {
    if (id) {
      const existingPost = posts.find((p) => p.id === parseInt(id));
      if (existingPost) {
        setPost(existingPost);
      }
    }
  }, [id, posts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(post);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={post.author}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        value={post.content}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={post.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BlogForm;
