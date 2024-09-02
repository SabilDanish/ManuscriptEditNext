"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';


const useForm =  () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<[] | null>(null);

    const radioHandlerUrl:any = {
        "life-sciences": "https://drive.google.com/file/d/1tzG-5L135VdsVCOs8GTgj_527XUL_8v5/view",
        "physical-sciences": "https://drive.google.com/file/d/1tCPZFaVAzze-3wr0GHmS_S0OspW9PDLY/view",
        "environmental-sciences": "https://drive.google.com/file/d/1UtXp2zWbQcKFhvM_Z26RzeBil3WckdX4/view",
        "social-sciences": "https://drive.google.com/file/d/1IbaEiYRJaP_bt_wr34uvDEHPCwmSw_Xq/view",
        "editing_finance_management": "https://drive.google.com/file/d/1b2AwNr0mUacoKimTk3zxCkLgbCUlEPYb/view",
        "journal_selection_report": "https://drive.google.com/file/d/1ExQOsg7APC2szBymLJLA3PzHTulp9vUM/view",
        "data_analytics_statistical_analysis": "https://drive.google.com/file/d/1621BhQ2e3x0iU_jx0q3Su6t4L08sKvIL/view",
        "proofreading_copy_substantive_editing": "https://drive.google.com/file/d/19iCszWLuuVM8JgY0XvJ96_9iXkx2sabs/view"
    }

    const postData = async (formData: any,setForm:any): Promise<void> => {
        setIsLoading(true);
        setError(null);

        const {radio_url,...rest} = formData

        try {
            fetch(`https://www.manuscriptedit.com/api/contactus.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...rest})
            }).then(response => {
                return response.json()
            }).then(responseData => {
                const {Status} = responseData[0]
                if(Status){
                    // Thank you , your request is received. You will receive the sample in your mail shortly.
                    toast.success("Thank you, your request is received. You will receive the sample in your mail shortly.")
                    window.location.assign(radioHandlerUrl[radio_url])
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
                setForm({
                    name: "",
                    service: "",
                    phone_no: "",
                    email: "",
                    msg: "",
                })
            });

        } catch (error) {
            setError("Something went wrong");
            setIsLoading(false);
        }
    };



    return { isLoading, error, data, postData };
};

export default useForm;