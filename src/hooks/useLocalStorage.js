import { useState, useEffect } from 'react';
import { fetchPosts, savePosts } from '../mockAPI';

const useLocalStorage = () => {
  const [posts, setPosts] = useState(fetchPosts);

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  return [posts, setPosts];
};

export default useLocalStorage;
