"use client";

import useBlogs from "@/app/hooks/mainPage/useBlog";
import "./blog.css";
import { DNA } from "react-loader-spinner";
import { formatDate, get_image_src, truncateString } from "@/app/utils/lib";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const BlogNext = () => {
    const [page, setPage] = useState<number>(1)
    const router = useRouter();
    const { loading, error, blogs } = useBlogs(page);

    const redirectTo = (url: string) => {
        router.push(url);
    };

   

    return (
        <>

            {blogs && blogs.length && blogs.map(async(blog: any, index: number) => {
                const {
                    id,
                    title: {
                        rendered
                    },
                    date,
                    excerpt,
                    guid,
                    _embedded: {
                        'wp:featuredmedia':  [{
                            source_url
                        }]
                    },
                    categories
                } = blog

                // const categories_string_array:any = await fetchCategories(categories)
                return (

                    <>


                        <div className="row Blognext7" onClick={() => redirectTo(guid.rendered)}>
                            <div className="col-lg-5" >
                                {source_url && <img className="blogImg" src={source_url} alt="no image" />}
                            </div>

                            <div className="col-lg-7 BlogCategoryCol">
                                <div>
                                    {loadCategories(categories)}
                                </div>

                                <div className="blogHeading1">
                                    <h4 className="blogHeading">{rendered}</h4>
                                </div>

                                <div>
                                    <div dangerouslySetInnerHTML={{ __html: truncateString(excerpt.rendered, 130) }} />
                                    {/* <p >Copy editing is a vital phase in the editorial process that enhances the language, style, and consistency of a written…</p> */}
                                </div>

                                <div>
                                    <p>Team Manuscript - <span className="DateSpan">{formatDate(date)}</span></p>
                                </div>


                            </div>
                        </div>
                    </>

                )
            })}

            <div className="pagination-blog">
                <button className="pagination-button" disabled={page - 1 > 0 ? false : true} onClick={() => {
                    if(page > 0){
                        setPage(page => page - 1)
                    }
                }}>Previous</button>
                <button className="pagination-button" onClick={() => {
                    if(page > 0){
                        setPage(page => page + 1)
                    }
                }}>Next</button>
            </div>
        </>
    );
}

export default BlogNext


const fetchCategories = (categories:any) => {
    const fetchPromises = categories.map((categoryId: number) => {
        const url = `https://www.manuscriptedit.com/scholar-hangout/wp-json/wp/v2/categories/${categoryId}`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(categoryData => {
                return categoryData.name;
            });
    });


    const value = Promise.all(fetchPromises)
        .then(category => {
            console.log('All categories fetched:', category);
            return category
        })
        .catch(error => {
            console.error('Error fetching category names:', error);
        })

    return value
}

const loadCategories = async (categories:any) => {
    try {
        const categories_string_array:any = await fetchCategories(categories);

        return (
            <div>
                <ul className="blog-Ul">
                    {categories_string_array && categories_string_array.length > 0 ? (
                        categories_string_array.map((val: string) => (
                            <li key={val} className="CategoryBlog">{val}</li>
                        ))
                    ) : (
                        <li>Loading categories...</li>
                    )}
                </ul>
            </div>
        );
    } catch (error) {
        console.error('Error fetching categories:', error);
        return <div>Error fetching categories. Please try again later.</div>;
    }
};
