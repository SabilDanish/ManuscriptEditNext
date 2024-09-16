"use client"; 

import { useEffect, useRef, useState } from "react";
import "./BlogDetails.css";

const BlogDetailsClient = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [excerpt, setExcerpt] = useState<any>()
  const iframeWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setUrl(localStorage.getItem('url'));
    setExcerpt(localStorage.getItem('content'))
  }, []);

  useEffect(() => {
    if (iframeWrapperRef.current && excerpt) {
      iframeWrapperRef.current.innerHTML = excerpt; // Set the inner HTML content safely using useRef
    }
  }, [excerpt]);

  console.log({excerpt})


  return (
    <div className="container">
      <div className="iframe-wrapper" id="iframe-wrapper" ref={iframeWrapperRef}>
        {/* {excerpt ? (
          <div dangerouslySetInnerHTML={{__html: excerpt}}/>
        ) : (
          <p>Loading...</p>
        )} */}
        {!excerpt && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default BlogDetailsClient;