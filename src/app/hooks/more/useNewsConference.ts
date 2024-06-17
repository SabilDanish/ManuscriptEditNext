"use client"
// import { Partner } from '@/app/utils/interfaces';
import env from '@/env/env';
import { useState, useEffect } from 'react';


const useFetchNews = () => {
    const [news, setNews] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchNews()
    },[])

    const fetchNews = async () => {
        setLoading(true)
        try {
          fetch(
            `https://www.manuscriptedit.com/api/get_all_testimonial_news.php`, {
                method: "get",
              }
          ).then(response => {
            return response.json()
          }).then(data => {
            setNews(data);
          }).finally(() => {
            setLoading(false);
          });
        } catch (error) {
          setError("something went wrong");
        }
    }

    return {
        news,
        loading,
        error
    }
}

export default useFetchNews