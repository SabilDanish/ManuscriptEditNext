import { FetchPostResponse } from '@/app/utils/interfaces';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useAuth = <T>(setShowLogin:any,showLogin:boolean): FetchPostResponse<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    const postData = async (formData: any): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            fetch('https://www.manuscriptedit.com/api/author_signup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => {
                return response.json()
            }).then(responseData => {
                setData(responseData);
                setShowLogin(!showLogin)
                fetch('/api/sendEmail',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        subject: 'Welcome to Our Service',
                        message: `Hi ${formData.fname},\n\nThank you for registering. Welcome to our service!`,
                    }),
                }).then(emailResponse => {
                    if (emailResponse.ok) {
                        toast.success('Registration successful and email sent');
                      } else {
                        toast.error('Registration successful but email could not be sent');
                      }
                })
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

export default useAuth;