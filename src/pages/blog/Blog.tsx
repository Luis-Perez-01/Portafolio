import { useContext, useEffect } from "react";
import PostList from "../../components/PostList";
import { Link } from "react-router-dom";
import LoadingPostList from "../../components/LoadingPostList";
import PostsContext from "../../context/PostsContext";
import IsAdmin from "../../middleware/isAdmin.middleware";

export default function Blog() {
  const { posts, isLoading } = useContext(PostsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-lg w-full my-10 mx-auto animate-fade-down">
      <div className="max-w-screen-lg flex justify-between items-center mx-10 mb-10">
        <h1 className="font-semibold text-2xl">Últimos artículos</h1>
        <IsAdmin>
          <Link
            to="/blog/create"
            className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-105 tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
          >
            Crear artículo
          </Link>
        </IsAdmin>
      </div>
      {isLoading ? <LoadingPostList /> : <PostList posts={posts} />}
    </div>
  );
}
