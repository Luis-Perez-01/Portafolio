import { createContext, useState, useEffect } from "react";
import api from "../api";
import { Post } from "../interfaces/Post.interface";

interface PostsContextValue {
  posts: Post[];
  isLoading?: boolean;
}

const PostsContext = createContext<PostsContextValue>({
  posts: [],
  isLoading: false,
});

const PostsProvider = ({ children }: { children: any }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    api.posts.getAll
      .fetch()
      .then((data) => setPosts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <PostsContext.Provider value={{ posts, isLoading }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsProvider };
export default PostsContext;
