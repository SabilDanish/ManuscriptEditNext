import { Editor } from '@/app/utils/interfaces';
import env from '@/env/env';
import { useState, useEffect } from 'react';

const useFetchEditors = (type: string, limit: number, offset: number) => {
    console.log({type})
    const [editors, setEditors] = useState<Editor[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchEditors()
    }, [limit, offset, type])

    const fetchEditors = async () => {
        setLoading(true)
        try {
            fetch(
                `https://www.manuscriptedit.com/api/get_all_editor_profile_details.php?ediType=${type}&limit=${limit}&offset=${offset}`, {
                method: "get",
            }
            ).then(response => {
                return response.json()
            }).then(data => {
                setEditors(data);
            }).finally(() => {
                setLoading(false);
            });
        } catch (error) {
            setError("something went wrong");
        }
    }

    return {
        editors,
        loading,
        error
    }
}

export default useFetchEditors