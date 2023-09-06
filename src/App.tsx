import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <BrowserRouter>
          <ModalContextProvider>
            <Navigation />
            <Login />
            <Register />
          </ModalContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Post />} />
              <Route path="/blog/create" element={<CreatePost />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <Toaster />
          </Layout>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
