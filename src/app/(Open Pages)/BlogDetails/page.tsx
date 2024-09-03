"use client";


import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import "./BlogDetails.css";
import { DNA } from "react-loader-spinner";


const BlogDetailsNext = () => {
    const [url,setUrl] = useState<any>()

    useEffect(() => {
        setUrl(localStorage.getItem('url'))
    },[])

   

    return (
        <>
            <div className="container">
                <div className="iframe-wrapper" id="iframe-wrapper">
                    <iframe
                        width="100%"
                        height="900"
                        src={url}
                    ></iframe>
                </div>
            </div>


        </>
    );
}

export default BlogDetailsNext;
