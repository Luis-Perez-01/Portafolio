import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { ChevronLeft } from "lucide-react";
import { Post } from "../../interfaces/Post.interface";
import LoadingPost from "../../components/LoadingPost";
import { formatDate } from "../../utils/dateUtils";

export default function Post() {
  const { slug } = useParams();

  const [post, setPost] = useState<Post>({} as Post);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="my-10 mx-2 lg:mx-auto text-sm md:text-base">
      <div className="max-w-screen-lg flex justify-between mb-10 md:mx-auto">
        <Link className="flex items-center" to={`/blog`}>
          <ChevronLeft /> Volver
        </Link>
        <span>{formatDate(post.createdAt)}</span>
      </div>
      <article className="max-w-screen-lg prose prose-2xl dark:prose-invert md:mx-auto">
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
