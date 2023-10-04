import { Link } from "react-router-dom";
import { Post } from "../interfaces/Post.interface";

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
        <Link
          className="first:md:col-span-2 first:md:flex-row first:col-span-1 first:flex-col flex flex-col min-h-[13rem] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900/50 group max-h-[30rem]"
          to={`/blog/${post.slug}`}
          key={post._id}
        >
          <figure className="overflow-hidden h-full w-full">
            <img
              className="aspect-video object-cover object-center h-full w-full transform ease-in-out group-hover:scale-[1.05] duration-500"
              src={post.file}
              alt={post.title}
            />
          </figure>

          <div className="flex flex-col h-full">
            <div className="flex-1 space-y-2 pt-6 pb-10 px-6 h-full">
              <h1 className="uppercase font-semibold line-clamp-2">
                {post.title}
              </h1>
              <p className="font-semibold text-neutral-700 dark:text-neutral-300 line-clamp-3">
                {post.description}
              </p>
            </div>
            <span className="flex-initial text-sm font-semibold text-neutral-700 dark:text-neutral-300 px-6 pb-6">
              {formatDate(post.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
