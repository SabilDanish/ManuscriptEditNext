import env from '@/env/env';
import { useState, useEffect } from 'react';


const useBlogs = () => {
    const [blogs, setBlogs] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBlogs()
    },[])

    const fetchBlogs = async () => {
        setLoading(true)
        try {
          fetch(
            `https://www.manuscriptedit.com/scholar-hangout/wp-json/wp/v2/posts`, {
                method: "get",
              }
          ).then(response => {
            return response.json()
          }).then(data => {
            setBlogs(data);
          }).finally(() => {
            setLoading(false);
          });
        } catch (error) {
          setError("something went wrong");
          setLoading(false)
        }
    }

    return {
        blogs,
        loading,
        error
    }
}

export default useBlogs