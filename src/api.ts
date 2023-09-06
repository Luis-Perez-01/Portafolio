import { Post } from "../interfaces/Post.interface";

const api = {
  auth: {
    login: {
      fetch: async (email: string, password: string) => {
        const response = await fetch("http://localhost:3000/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }).then((res) => res.json());
        return response;
      },
    },
    register: {
      fetch: async (name: string, email: string, password: string) => {
        const response = await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ name, email, password }),
        }).then((res) => res.json());
        return response;
      },
    },
  },
  posts: {
    getAll: {
      fetch: async () => {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "GET",
          credentials: "include",
        }).then((res) => res.json() as Promise<Post[]>);
        return response;
      },
    },
    getOne: {
      fetch: async (id: string | undefined) => {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: "GET",
          credentials: "include",
        }).then((res) => res.json());
        return response;
      },
    },
    create: {
      fetch: async (FormData: any) => {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          credentials: "include",
          body: FormData,
        }).then((res) => res.json());
        return response;
      },
    },
  },
};

export default api;
