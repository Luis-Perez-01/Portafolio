import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { ChevronLeft } from "lucide-react";
import { Post } from "../../interfaces/Post.interface";
import LoadingPost from "../../components/LoadingPost";
import { formatDate } from "../../utils/dateUtils";
import { UserContext } from "../../context/UserContext";

export default function Post() {
  const { slug } = useParams();

  const [post, setPost] = useState<Post>({} as Post);
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    api.posts.getBySlug
      .fetch(slug)
      .then((data) => setPost(data))
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, []);

  return isLoading ? (
    <LoadingPost />
  ) : (
    <div className="max-w-4xl my-10 mx-auto text-sm md:text-base">
      <div className="flex justify-between mb-10 mx-10">
        <Link className="flex items-center" to={`/blog`}>
          <ChevronLeft /> Volver
        </Link>
        {userInfo !== null ? (
          userInfo.id === "64f7f14111e13ad18a78c3a3" ? (
            <Link
              to={`/blog/edit/${post.slug}`}
              className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-105 tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
            >
              Editar artículo
            </Link>
          ) : null
        ) : null}
        <span>{formatDate(post.createdAt)}</span>
      </div>
      <article className="prose prose-2xl dark:prose-invert mx-10">
        <section className="space-y-8">
          <h1 className="text-xl md:text-4xl font-semibold">{post.title}</h1>
          <p className="text-lg md:text-2xl">{post.description}</p>
          <img src={post.file} alt={post.title} className="mx-auto" />
          <div
            className="text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
      </article>
    </div>
  );
}
