import { Partner } from '@/app/utils/interfaces';
import env from '@/env/env';
import { useState, useEffect } from 'react';


const useFetchPartners = (limit: number, offset: number) => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPartners()
    },[limit,offset])

    const fetchPartners = async () => {
        setLoading(true)
        try {
          fetch(
            `${env.testingUrl}get_all_rec_patners_img.php?limit=${limit}&offset=${offset}`, {
                method: "get",
                headers: new Headers({
                  "ngrok-skip-browser-warning": "69420",
                }),
              }
          ).then(response => {
            return response.json()
          }).then(data => {
            setPartners(data);
          }).finally(() => {
            setLoading(false);
          });
        } catch (error) {
          setError("something went wrong");
        }
    }

    return {
        partners,
        loading,
        error
    }
}

export default useFetchPartners