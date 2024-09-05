"use client"

import useBlogs from "@/app/hooks/mainPage/useBlog";
import "./blog.css"
import { DNA } from "react-loader-spinner";
import { formatDate } from "@/app/utils/lib";


const BlogNext = ({ children }: any) => {

    return (
        <>
            <div className="container-fluid blog-Container" >
                <div className="row BlogRow">
                    <div className="col-lg-8">
                        {children}
                    </div>
                    <div className="col-lg-3" >
                        <div className="sticky-wrapper">
                            {/* <div className="BlogColImgAdd">

                                <iframe
                                    width="100%"
                                    height="290"
                                    src="https://www.youtube.com/embed/vZcRRztDCsE"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded YouTube Video"
                                >
                                </iframe>

                            </div> */}

                            <div className="BlogColImgAdd1">
                                <img className="BlogImgAdd" src="/images/innerimg/Thesis-455x1024.jpg" alt="#" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default BlogNext
