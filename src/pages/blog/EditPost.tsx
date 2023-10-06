import { useParams } from "react-router-dom";
import PostFormCreate from "../../components/PostFormCreate";
import { useEffect, useState } from "react";
import api from "../../api";
import { Post } from "../../interfaces/Post.interface";

export default function EditPost() {
  const { slug } = useParams();
  const [postData, setPostData] = useState<Post>({} as Post);

  useEffect(() => {
    api.posts.getBySlug.fetch(slug).then((data) => setPostData(data));
  }, []);

  return (
    <div className="max-w-screen-lg w-full mx-auto my-10">
      <h1 className="text-2xl font-semibold">Editar artículo</h1>
      <PostFormCreate postData={postData} />
    </div>
  );
}
