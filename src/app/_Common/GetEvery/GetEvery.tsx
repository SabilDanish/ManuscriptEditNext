"use client";

import Link from "next/link";
import "./GetEvery.css";

const GetEvery = () => {
    return (
        <>
            <div className="container-fluid getEverySpace" style={{ marginTop: "70px", marginBottom: "90px" }}>
                <div>
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-3" style={{ marginTop: "20px" }}>
                            <div className="getHelp" style={{ backgroundColor: '#f3d5d5', padding: "22px", borderRadius: "22px", boxShadow: "1px 1px 8px grey" }}>
                                <h5>
                                    GET HELP WITH RESEARCH PAPER PUBLICATION
                                </h5>
                                <Link href="/EditingOverview" style={{ color: "#a31e22", textDecoration: 'none' }}>
                                    Know more &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3" style={{ marginTop: "20px" }}>
                            <div className="getHelp" style={{ backgroundColor: '#f3d5d5', padding: "22px", borderRadius: "22px", boxShadow: "1px 1px 8px grey" }}>
                                <h5 style={{textTransform:"uppercase"}}>
                                    Get Scientific and English Language editing help
                                </h5>
                                <Link href="/PackageService" style={{ color: "#a31e22", textDecoration: 'none' }}>
                                    Know more &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3" style={{ marginTop: "20px" }}>
                            <div className="getHelp" style={{ backgroundColor: '#f3d5d5', padding: "22px", borderRadius: "22px", boxShadow: "1px 1px 8px grey" }}>
                                <h5>
                                    GET PhD & MASTER THESIS ASSISTANCE
                                </h5>
                                <Link href="/ResearchSupportOverview" style={{ color: "#a31e22", textDecoration: 'none' }}>
                                    Know more &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    );
}

export default GetEvery;
