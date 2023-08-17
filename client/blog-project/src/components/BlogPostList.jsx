import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPostList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs').then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostList;
