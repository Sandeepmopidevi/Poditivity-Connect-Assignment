import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  return <AppRouter posts={posts} setPosts={setPosts} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
