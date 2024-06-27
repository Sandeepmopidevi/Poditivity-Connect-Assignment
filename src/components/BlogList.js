import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <p>By {post.author} on {post.date}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
