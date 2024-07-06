import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))
      ) : (
        <li>no blogs found</li>
      )}
    </ul>
  );
};

export default Blog;

export const loaderBlog = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();
  return { posts };
};
