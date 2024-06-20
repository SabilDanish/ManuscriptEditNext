"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';

const usePriceCalculator = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [result,setResult] = useState<[]>([])

    const getPriceCalculator = (body:any) => {
        setIsLoading(true);
        setError(null);

        try {
            fetch('https://www.manuscriptedit.com/api/calculator.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }).then(response => {
                return response.json()
            }).then(responseData => {
                const {status,data} = responseData

                if(status){
                    setResult(data)
                }
            }).catch(err => {
                setError("Your mail cannot be registered");
                toast.error("Something went wrong.Please wait before retrying")
            }).finally(() => {
                setIsLoading(false);
            })
        } catch (error) {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        error,
        getPriceCalculator,
        result
    }
}

export default usePriceCalculator