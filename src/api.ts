import { Post } from "./interfaces/Post.interface";

const api = {
  auth: {
    login: {
      fetch: async (email: string, password: string) => {
        const response = await fetch(
          "https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/auth/signin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
          }
        ).then((res) => res.json());
        return response;
      },
    },
    register: {
      fetch: async (name: string, email: string, password: string) => {
        const response = await fetch(
          "https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ name, email, password }),
          }
        ).then((res) => res.json());
        return response;
      },
    },
  },
  posts: {
    getAll: {
      fetch: async () => {
        const response = await fetch(
          "https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/posts",
          {
            method: "GET",
            credentials: "include",
          }
        ).then((res) => res.json() as Promise<Post[]>);
        return response;
      },
    },
    getBySlug: {
      fetch: async (slug: string | undefined) => {
        const response = await fetch(
          `https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/posts/${slug}`,
          {
            method: "GET",
            credentials: "include",
          }
        ).then((res) => res.json());
        return response;
      },
    },
    create: {
      fetch: async (formData: any) => {
        const response = await fetch(
          "https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/posts",
          {
            method: "POST",
            credentials: "include",
            body: formData,
            headers: {
              "x-access-token": localStorage.getItem("token")!,
            },
          }
        ).then((res) => res.json());
        return response;
      },
    },
    update: {
      fetch: async (formData: any, id: string | undefined) => {
        const response = await fetch(
          `https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/posts/${id}`,
          {
            method: "PUT",
            credentials: "include",
            body: formData,
            headers: {
              "x-access-token": localStorage.getItem("token")!,
            },
          }
        ).then((res) => res.json());
        return response;
      },
    },
  },
  projects: {
    getAll: {
      fetch: async () => {
        const response = await fetch(
          "https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/projects",
          {
            method: "GET",
            credentials: "include",
          }
        ).then((res) => res.json());
        return response;
      },
    },
  },
  tecnologies: {
    getAll: {
      fetch: async () => {
        const response = await fetch(
          "https://portafolio-backend-dev-smag.4.us-1.fl0.io/api/technology",
          {
            method: "GET",
            credentials: "include",
          }
        ).then((res) => res.json());
        return response;
      },
    },
  },
};

export default api;
