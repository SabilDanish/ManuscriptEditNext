"use client";

import { useEffect, useRef, useState } from "react";
import "./BlogDetails.css";
import Metadata from "@/app/Metadata";

const BlogDetailsClient = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [excerpt, setExcerpt] = useState<any>()
  const iframeWrapperRef = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState<string | null>()
  const [description, setDescription] = useState<string | null>()

  useEffect(() => {
    setUrl(localStorage.getItem('url'));
    setExcerpt(localStorage.getItem('content'))
    setTitle(localStorage.getItem("title"))
    setDescription(localStorage.getItem("excerpt"))
  }, []);

  useEffect(() => {
    if (iframeWrapperRef.current && excerpt) {
      iframeWrapperRef.current.innerHTML = `<h1>${title}</h1>${excerpt}`; // Set the inner HTML content safely using useRef
    }
  }, [excerpt]);


  return (
    <>
      {<Metadata metaData={{title, description}} />}
      <div className="container">
        <div className="iframe-wrapper" id="iframe-wrapper" ref={iframeWrapperRef}>
          {/* {excerpt ? (
      <div className="iframe-wrapper" id="iframe-wrapper">
        {excerpt ? (
          <div>
            <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: excerpt}}/>
          </div>
        ) : (
          <p>Loading...</p>
        )} */}
          {!excerpt && <p>Loading...</p>}
        </div>
      </div>
    </>
  );
};

export default BlogDetailsClient;