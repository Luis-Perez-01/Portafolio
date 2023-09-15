import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./context/ThemeContext";
import { ModalContextProvider } from "./context/ModalContext";
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { UserContextProvider } from "./context/UserContext";
import Footer from "./components/Footer";
import CreatePost from "./pages/blog/CreatePost";
import { PostsProvider } from "./context/PostsContext";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <ModalContextProvider>
          <PostsProvider>
            <Navigation />
            <Login />
            <Register />
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/blog">
                  <Route index element={<Blog />} />
                  <Route path=":slug" element={<Post />} />
                  <Route path="create" element={<CreatePost />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
              <Toaster />
            </Layout>
          </PostsProvider>
        </ModalContextProvider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
