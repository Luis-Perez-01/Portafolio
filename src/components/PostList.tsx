import { Link } from "react-router-dom";
import { Post } from "../../interfaces/Post.interface";

const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function PostList({ posts }: { posts: Post[] }) {
  const orderPosts = posts.slice().reverse();

  return (
    <div className="grid md:grid-cols-2 mx-10 gap-10">
      {orderPosts.map((post) => (
        <Link to={`/blog/${post._id}`}>
          <div
            className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 group"
            key={post._id}
          >
            <figure className="overflow-hidden">
              <img
                className="aspect-video bg-cover bg-white transform ease-in-out group-hover:scale-[1.05] duration-500"
                src={post.file}
                alt={post.title}
              />
            </figure>
            <div className="relative h-[13rem] space-y-2 p-6">
              <h1 className="uppercase font-semibold line-clamp-2">
                {post.title}
              </h1>
              <p className="font-semibold text-neutral-700 dark:text-neutral-300 line-clamp-3">
                {post.description}
              </p>
              <span className="absolute bottom-[1.5rem] text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                {formatDate(post.createdAt)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
