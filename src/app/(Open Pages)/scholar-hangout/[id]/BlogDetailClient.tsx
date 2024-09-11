"use client"; // This makes the component a client component

import { useEffect, useState } from "react";
import "./BlogDetails.css";

const BlogDetailsClient = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [excerpt, setExcerpt] = useState<any>()
  const [title, setTitle] = useState<string | null>()

  useEffect(() => {
    setUrl(localStorage.getItem('url'));
    setExcerpt(localStorage.getItem('content'))
    setTitle(localStorage.getItem("title"))
  }, []);

  console.log({url1: url,excerpt})

  return (
    <div className="container">
      <div className="iframe-wrapper" id="iframe-wrapper">
        {excerpt ? (
          <div>
            <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: excerpt}}/>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetailsClient;