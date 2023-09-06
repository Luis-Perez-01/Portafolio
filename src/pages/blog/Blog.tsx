import { useEffect, useState } from "react";
import api from "../../api";
import PostList from "../../components/PostList";

export default function Blog() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    api.posts.getAll.fetch().then((data) => setPosts(data));
  }, []);

  return (
    <div className="max-w-screen-lg my-10 mx-auto animate-fade-down">
      <h1 className="font-semibold text-2xl mb-10 mx-10">Últimos artículos</h1>
      <PostList posts={posts} />
    </div>
  );
}
