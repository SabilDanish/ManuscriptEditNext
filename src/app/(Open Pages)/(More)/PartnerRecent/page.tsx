"use client"
import Breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import useFetchPartners from "@/app/hooks/more/useRecentPartners";
import { Partner } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";


export default function Home() {
    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)
    const [allPartner, setAllPartner] = useState<Partner[]>([])
    const { loading, error, partners } = useFetchPartners(limit, offset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setOffset(prev => prev + 1)
        }
    };

    useEffect(() => {
        setAllPartner(prev => [...prev, ...partners])
    }, [partners])



    return (
        <>
            {breadcrum("More", "Recent Partners")}
            <div className="container mb-3">
                <div className="row">
                    {
                        loading && !allPartner.length && (
                            <DNA
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        )
                    }
                    {
                        allPartner.length ? allPartner.map((partner, index) => {
                            const { logo_link, part_link } = partner
                            return (
                                <div className="col-md-4" key={index}>
                                    <a href={part_link} target="_blank" rel="noopener noreferrer" className="card-link">
                                        <div className="card text-center mr-4 mt-5">
                                            <div className="card-body">
                                                <img src={logo_link} width="200px" height="83px" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        }) : ""
                    }
                    <br />
                    <div>
                        {loading && allPartner.length ? (
                            <DNA
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        ) : ""}
                    </div>
                    {/* <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mr-4 mt-5">
                            <div className="card-body">
                                <img src="images/partner/1.jpg" width="200px" height="83px" alt="" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    );
}
