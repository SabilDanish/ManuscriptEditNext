import env from '@/env/env';
import { useState, useEffect } from 'react';


const UseWebinar = () => {
    const [Webinar, setWebinar] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchWebinar()
    },[])

    const fetchWebinar = async () => {
        setLoading(true)
        try {
          fetch(
            `https://www.secure.manuscriptedit.com/api/webinar_register.php`
            
          ).then(response => {
            return response.json()
          }).then(data => {
            setWebinar(data);
          }).finally(() => {
            setLoading(false);
          });
        } catch (error) {
          setError("something went wrong");
          setLoading(false)
        }
    }

    return {
        Webinar,
        loading,
        error
    }
}

export default UseWebinar ;