import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPost{
  id: number;
  title: string;
  content: string;
  created_at: string;

}

export default function Home() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchBlogs(){
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
      
    }
    fetchBlogs();
  }, []);


  return (<div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
    <h1>My Blog</h1>
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{new Date(blog.created_at).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  </div>
);
}