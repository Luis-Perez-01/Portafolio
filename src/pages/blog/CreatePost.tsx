import PostFormCreate from "../../components/PostFormCreate";

export default function CreatePost() {
  return (
    <div className="max-w-screen-lg w-full mx-auto my-10">
      <h1 className="text-2xl font-semibold">Crear un nuevo artículo</h1>
      <PostFormCreate />
    </div>
  );
}
