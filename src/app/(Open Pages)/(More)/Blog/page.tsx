"use client";

import useBlogs from "@/app/hooks/mainPage/useBlog";
import "./blog.css";
import { DNA } from "react-loader-spinner";
import { formatDate, get_image_src, truncateString } from "@/app/utils/lib";
import { useRouter } from 'next/navigation';

const BlogNext = () => {
    const router = useRouter();
    const { loading, error, blogs } = useBlogs();

    const redirectTo = (url: string) => {
        router.push(url);
    };

   

    return (
        <>
            {blogs && blogs.length && blogs.map((blog: any, index: number) => {
                console.log({blog});
                const {
                    id,
                    title: { rendered },
                    date,
                    excerpt,
                    content,
                    guid
                } = blog;
                get_image_src(content.rendered);
                return (
                    <div className="row Blognext7" onClick={() => redirectTo(guid.rendered)} key={index}>
                        <div className="col-lg-5">
                            <img className="blogImg" src={get_image_src(content.rendered)} alt="no image" />
                        </div>
                        <div className="col-lg-7 BlogCategoryCol">
                            <div>
                                <ul className="blog-Ul">
                                    <li className="CategoryBlog">English Editing</li>
                                </ul>
                            </div>
                            <div className="blogHeading1">
                                <h4 className="blogHeading">{rendered}</h4>
                            </div>
                            <div>
                                <div dangerouslySetInnerHTML={{__html: truncateString(excerpt.rendered, 130)}} />
                            </div>
                            <div>
                                <p>Team Manuscript - <span className="DateSpan">{formatDate(date)}</span></p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default BlogNext;
