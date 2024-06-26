import env from '@/env/env';
import { useState, useEffect } from 'react';


const useBlogs = (page: number) => {
  const [blogs, setBlogs] = useState<any>([]);
  const [category, setCategory] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs()
  }, [page])

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      fetch(
        `https://www.manuscriptedit.com/scholar-hangout/wp-json/wp/v2/posts?_embed&per_page=10&page=${page}`, {
        method: "get",
      }
      ).then(response => {
        return response.json()
      }).then(data => {
        console.log({ data })
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
    error,
  }
}

export default useBlogs