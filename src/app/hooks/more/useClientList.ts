import { Editor } from '@/app/utils/interfaces';
import env from '@/env/env';
import { useState, useEffect } from 'react';

const useClientList = (type: string, limit: number, offset: number) => {
    console.log({type})
    const [clients, setClient] = useState<Editor[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ClientList()
    }, [limit, offset, type])
    console.log({type,offset,limit})

    const ClientList = async () => {
        setLoading(true)
        try {
            fetch(
                `https://www.manuscriptedit.com/api/get_all_editor_profile_details.php?ediType=${type}&limit=${limit}&offset=${offset}`, {
                method: "get",
            }
            ).then(response => {
                return response.json()
            }).then(data => {
                setClient(data);
            }).finally(() => {
                setLoading(false);
            });
        } catch (error) {
            setError("something went wrong");
        }
    }

    return {
        clients,
        loading,
        error
    }
}

export default useClientList