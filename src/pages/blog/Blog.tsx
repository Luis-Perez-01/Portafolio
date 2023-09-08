import { useContext, useEffect, useState } from "react";
import api from "../../api";
import PostList from "../../components/PostList";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ModalContext } from "../../context/ModalContext";

export default function Blog() {
  const [posts, setPosts] = useState<any>([]);
  const { userInfo } = useContext(UserContext);
  const { handleModalLogin } = useContext(ModalContext);

  useEffect(() => {
    api.posts.getAll.fetch().then((data) => setPosts(data));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-lg my-10 mx-auto animate-fade-down">
      <div className="max-w-screen-lg flex justify-between items-center mx-10 mb-10">
        <h1 className="font-semibold text-2xl">Últimos artículos</h1>
        {userInfo ? (
          <Link
            to="/blog/create"
            className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-105 tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
          >
            Crear artículo
          </Link>
        ) : (
          <button
            onClick={handleModalLogin}
            className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-105 tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
          >
            Inicia sesión para crear un artículo
          </button>
        )}
      </div>
      <PostList posts={posts} />
    </div>
  );
}
