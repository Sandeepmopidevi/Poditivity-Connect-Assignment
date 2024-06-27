// src/App.js
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import useLocalStorage from './hooks/useLocalStorage';
import AppRouter from './Router';

const App = () => {
  const [posts, setPosts] = useLocalStorage();

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <AppRouter posts={posts} setPosts={setPosts} />
      </div>
    </>
  );
};

export default App;
