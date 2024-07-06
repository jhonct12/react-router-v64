import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog, { loaderBlog } from "../pages/Blog";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Post, { loaderPost } from "../pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic></LayoutPublic>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        errorElement: <NotFound></NotFound>,
        children: [
          {
            index: true,
            element: <Home></Home>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
          {
            path: "/blog",
            element: <Blog></Blog>,
            loader: loaderBlog,
          },
          {
            path: "/blog/:id",
            element: <Post></Post>,
            loader: loaderPost,
          },
        ],
      },
    ],
  },
]);
