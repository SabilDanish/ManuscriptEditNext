import Link from 'next/link';
import React from 'react';
import "./header.css"

const TabDropdownData = ({ tabData, setTabs, tabs }: any) => {
    const [{ data, className  }] = tabData;


    console.log("This is data",data)

    return (
        <div className={className === "ServicesTab" ? "tab-grid-container" : "OtherTabs"} onMouseEnter={() => setTabs(tabs)} onMouseLeave={() => setTabs("")}>
            {data && data.length ? data.map((val: any, index: number) => {
                const { content, subHeader,css } = val;
                console.log({content,subHeader,css})
                const ulClass = index === 2 ? 'third-ul' : ''; // Add class to 3rd ul (index 2)
                return (
                    <ul key={index} className={ulClass} style={{background:css?.color}}>
                        <li>{subHeader}</li>
                        {content && content.length ? content.map((value: any, idx: number) => {
                            const { content, link } = value;
                            return (
                                <li key={idx}><Link href={link}>{content}</Link></li>
                            );
                        }) : ""}
                    </ul>
                );
            }) : ""}
        </div>
    );
}

export default TabDropdownData;
