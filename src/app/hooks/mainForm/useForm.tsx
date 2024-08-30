"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';


const useForm =  () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<[] | null>(null);

    const postData = async (formData: any): Promise<void> => {
        setIsLoading(true);
        setError(null);

        const {email} = formData
        try {
            fetch(`https://www.manuscriptedit.com/api/contactus.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...formData,country_code: 99})
            }).then(response => {
                return response.json()
            }).then(responseData => {
                const {Status} = responseData[0]
                if(Status){
                    // Thank you , your request is received. You will receive the sample in your mail shortly.
                    toast.success("Thank you, your request is received. You will receive the sample in your mail shortly.")
                    // fetch('https://email-nodemailer.vercel.app/sendEmail',{
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //     },
                    //     body: JSON.stringify({email})
                    // }).then(response => {
                    //     return response.json()
                    // }).then(response => {
                    //     // toast.success("Your request is received, we will get back to you in 24 hours.")
                    // }).catch(err => {
                    //     // console.log({err})
                    //     // toast.error("Your request couldn't be sent, please try again.")
                    // })
                }else{
                    toast.error("Your request couldn't be sent, please try again.")
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

export default useForm;