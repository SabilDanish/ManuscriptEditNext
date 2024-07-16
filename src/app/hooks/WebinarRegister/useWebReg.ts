"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';


const useFormWebReg =  () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<[] | null>(null);

    const postData = async (formData: any): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            fetch(`https://www.secure.manuscriptedit.com/api/webinar_register.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then(response => {
                return response.json()
            }).then(responseData => {
                const {status} = responseData[0]

                if(status){
                    toast.success("Query Sent")
                }else{
                    toast.error("Your query couldn't be sent")
                }
            }).catch(err => {
                setError("Couldn't save your data");
                toast.error("Something went wrong")
            }).finally(() => {
                setIsLoading(false);
            });

        } catch (error) {
            setError("Something went wrong");
            setIsLoading(false);
        }
    };



    return { isLoading, error, data, postData };
};

export default useFormWebReg;