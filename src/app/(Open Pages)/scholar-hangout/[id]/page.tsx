import "./BlogDetails.css";
import BlogDetailsClient from "./BlogDetailClient";

export async function generateStaticParams() {
    const posts = await fetch(`https://www.manuscriptedit.com/scholar-hangout/wp-json/wp/v2/posts?_embed&per_page=10&page=${1}`).then((res) => res.json())
    return posts.map((post: any) => {
        return {id: `${post.slug}`}
    })
}

const BlogDetailsNext = () => {
    return (
        <>
            <BlogDetailsClient />
        </>
    );
}


export default BlogDetailsNext;
