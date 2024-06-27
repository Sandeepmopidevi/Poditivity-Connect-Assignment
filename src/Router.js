import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';

const AppRouter = ({ posts, setPosts }) => {
  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => (p.id === updatedPost.id ? updatedPost : p)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList posts={posts} />} />
        <Route path="/post/:id" element={<BlogPost posts={posts} onDelete={deletePost} />} />
        <Route path="/add" element={<BlogForm onSave={addPost} posts={posts} />} />
        <Route path="/edit/:id" element={<BlogForm onSave={updatePost} posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
