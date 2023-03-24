import { createContext } from 'react';
import { useProvidePosts } from '../hooks';
const initialstate = {
  posts: [],
  loading: true,
  addPostToState: () => {},
};

export const PostContext = createContext(initialstate);

export const PostsProvider = ({ children }) => {
  const posts = useProvidePosts();

  return <PostContext.Provider value={posts}> {children}</PostContext.Provider>;
};
