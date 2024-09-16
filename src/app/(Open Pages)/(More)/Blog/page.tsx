"use client";

import useBlogs from "@/app/hooks/mainPage/useBlog";
import "./blog.css";
import { formatDate, truncateString } from "@/app/utils/lib";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import searchLogo from '../../../utils/images/search-svgrepo-com.svg'
import Metadata from "@/app/Metadata";
import { usePathname } from 'next/navigation'
import { data } from '../../../utils/metaFile.js'
const newData: any = data;


const BlogNext = () => {
    // const pathName: string = usePathname().split("/").filter(val => val).join("")
    // let metaData = newData[pathName]
    const [page, setPage] = useState<number>(1)
    const [searchedBlog, setSearchedBlog] = useState<any>()
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    const inputRef = useRef<any>()
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    let { loading, error, blogs } = useBlogs(page)

   

    useEffect(() => {
      if(blogs.length){
        setSearchedBlog(blogs)
        localStorage.setItem('blogs',blogs)
      }
    }, [blogs])
    

    const router = useRouter();

    // const redirectTo = (url: string) => {
    //     router.push(url);
    // };

    const handleRedirect = (url: string,slug:string,content:any): void => {
        const data = { url };
        const formattedTitle = encodeURIComponent(slug.trim());
        localStorage.setItem("url", url)
        localStorage.setItem("content", content.rendered)
        router.push(`/scholar-hangout/${formattedTitle}`);
    };

    const handleChange = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
           
            if (blogs.length) {
                blogs = blogs.filter((blog: any) => {
                   
                    return blog.title.rendered.toLowerCase().includes(inputRef.current.value.toLowerCase())
                })

                setSearchedBlog(blogs)
            }
        }, 500);
    };


    return (
        <>
        {/* {<Metadata metaData={metaData} />} */}
            <div className="navbar">
                <div className="tabs">
                    <a target="_blank" href="https://www.manuscriptedit.com/scholar-hangout/category/publication/">Scholar Hub</a>
                    <a target="_blank" href="https://www.youtube.com/@manuscriptedit.">Videos</a>
                    <a target="_blank" href="https://sites.google.com/reseapro.com/case-studies">Case Studies</a>
                    <a target="_blank" href="https://www.manuscriptedit.com/scholar-hangout/category/podcast/">Podcast</a>
                </div>
                <div className="search-container">
                    <input
                        ref={inputRef}
                        type="text"
                        className={`search-input active`}
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    <button onClick={toggleSearch} className="search-button">
                        <img src={searchLogo.src} alt="looking-glass" height={16} width={16} />
                    </button>
                </div>
            </div>
            {/* <div
                style={{
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    // width: "300px",
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "start",
                    gap: "0.5em",
                    alignItems: "center",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add this line for box shadow
                }}
            >

                <img src={searchLogo.src} alt="looking-glass" height={16} width={16} />
                <input
                    ref={inputRef}
                    type="text"
                    defaultValue=""
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        border: 'none',
                        zIndex: "1",
                    }}
                />
            </div> */}
            {searchedBlog && searchedBlog.length && searchedBlog.map(async (blog: any, index: number) => {
                const {
                    id,
                    title: {
                        rendered
                    },
                    date,
                    excerpt,
                    guid,
                    slug,
                    content,
                    _embedded: {
                        'wp:featuredmedia': [{
                            source_url
                        }]
                    },
                    categories
                } = blog

                return (

                    <>
                        <div className="row Blognext7" onClick={() => handleRedirect(guid.rendered,slug,content)}>
                            <div className="col-lg-5" >
                                {source_url && <img className="blogImg" src={source_url} alt="no image" />}
                            </div>

                            <div className="col-lg-7 BlogCategoryCol">
                                <div>
                                    {/* {loadCategories(categories)} */}
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
                    if (page > 0) {
                        setPage(page => page - 1)
                    }
                }}>Previous</button>
                <button className="pagination-button" onClick={() => {
                    if (page > 0) {
                        setPage(page => page + 1)
                    }
                }}>Next</button>
            </div>
        </>
    );
}

export default BlogNext


// const fetchCategories = (categories: any) => {
//     const fetchPromises = categories.map((categoryId: number) => {
//         const url = `https://www.manuscriptedit.com/scholar-hangout/wp-json/wp/v2/categories/${categoryId}`;

//         return fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(categoryData => {
//                 return categoryData.name;
//             });
//     });


//     const value = Promise.all(fetchPromises)
//         .then(category => {
//             return category
//         })
//         .catch(error => {
//             console.error('Error fetching category names:', error);
//         })

//     return value
// }

// const loadCategories = async (categories: any) => {
//     try {
//         const categories_string_array: any = await fetchCategories(categories);

//         return (
//             <div>
//                 <ul className="blog-Ul">
//                     {categories_string_array && categories_string_array.length > 0 ? (
//                         categories_string_array.map((val: string) => (
//                             <li key={val} className="CategoryBlog">{val}</li>
//                         ))
//                     ) : (
//                         <li>Loading categories...</li>
//                     )}
//                 </ul>
//             </div>
//         );
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         return <div>Error fetching categories. Please try again later.</div>;
//     }
// };
