"use client"; // This makes the component a client component

import { useEffect, useState } from "react";
import "./BlogDetails.css";

const BlogDetailsClient = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [excerpt, setExcerpt] = useState<any>()

  useEffect(() => {
    setUrl(localStorage.getItem('url'));
    setExcerpt(localStorage.getItem('content'))
  }, []);

  console.log({url1: url,excerpt})

  return (
    <div className="container">
      <div className="iframe-wrapper" id="iframe-wrapper">
        {excerpt ? (
          <div dangerouslySetInnerHTML={{__html: excerpt}}/>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetailsClient;