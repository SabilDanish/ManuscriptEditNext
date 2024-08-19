"use client"

import  "./getEveryPortion.css";


const GetEveryPortion = ({tabData}:any) => {
    const tabData_key_arr: any = Object.entries(tabData)
    return(
        <>
            {
                tabData_key_arr.map((data:any,index:number) => {
                    const [header, {
                        description,
                        keywords
                    }] = data
                    return(
                        <div key={index} style={{background: "red", margin: "5px"}}>
                            <h1>{header}</h1>
                            <h3>{description}</h3>
                            <ul>
                                {
                                    keywords.map((val:string,index:number) => (
                                        <li key={index}>{val}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}

export default GetEveryPortion


// <div className="container">
//     <div className="row" style={{ justifyContent: "space-around" }}>
//         <div className="col-lg-4">
//             <div className="portion1">
//                 <ul>
//                     <li>Medical Communications</li>
//                     <li>Medical Communications</li>
//                     <li>Medical Communications</li>
//                     <li>Medical Communications</li>
//                     <li>Medical Communications</li>
//                 </ul>
//             </div>
//         </div>
//     </div>

// </div>