import { useState, useEffect } from 'react';

const useCountryCode = () => {
    const [countryCode, setcountryCode] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCountryCode()
    }, [])

    const fetchCountryCode = async () => {
        setLoading(true)
        try {
            fetch( `https://manuscriptedit.com/api/coun_code.php`, {
                method: "GET",
            }
            ).then(response => {
                return response.json()
            }).then(data => {
                setcountryCode(data);
            }).finally(() => {
                setLoading(false);
            });
        } catch (error) {
            setError("something went wrong");
            setLoading(false)
        }
    }

    return {
        countryCode,
        loading,
        error,
    }
}

export default useCountryCode