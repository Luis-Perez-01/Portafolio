import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api";
import { ChevronLeft } from "lucide-react";

const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Post() {
  const { id } = useParams();

  const [post, setPost] = useState<any>([]);

  useEffect(() => {
    api.posts.getOne.fetch(id).then((data) => setPost(data));
  }, []);

  return (
    <div className="max-w-screen-lg my-10 mx-5 lg:mx-auto">
      <div className="flex justify-between mb-10">
        <Link className="flex items-center" to={`/blog`}>
          <ChevronLeft /> Volver
        </Link>
        <span>{formatDate(post.createdAt)}</span>
      </div>
      <article>
        <section className="space-y-8">
          <h1 className="text-4xl font-semibold">{post.title}</h1>
          <p className="text-2xl">{post.description}</p>
          <img src={post.file} alt={post.title} className="mx-auto" />
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
      </article>
    </div>
  );
}
