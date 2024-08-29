"use client";

import Link from "next/link";
import "./GetEvery.css";

const GetEvery = () => {
    return (
        <>


            <div className="container-fluid" style={{marginTop:"50px"}}>
                <div className="row" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <div className="col-lg-2" style={{ marginBottom: "30px" }}>
                        <div
                            style={{
                                backgroundColor: "hsl(212, 100%, 91%)",
                                padding: "5px",
                                borderRadius: "8px",
                                textAlign: "center",
                                boxShadow: "-2px 2px 5px grey",
                            }}
                        >
                            <div style={{ fontSize: "2rem", color: "#4377B1", fontWeight: "bold" }}>10,000 +</div>
                            <p style={{ margin: 0, fontSize: "1rem", color: "rgb(51, 50, 50)" }}>Publications</p>
                        </div>
                    </div>
                    <div className="col-lg-2" style={{ marginBottom: "30px" }}>
                        <div
                            style={{
                                backgroundColor: "hsl(212, 100%, 91%)",
                                padding: "5px",
                                borderRadius: "8px",
                                textAlign: "center",
                                boxShadow: "-2px 2px 5px grey",
                            }}
                        >
                            <div style={{ fontSize: "2rem", color: "#4377B1", fontWeight: "bold" }}>1,117 +</div>
                            <p style={{ margin: 0, fontSize: "1rem", color: "rgb(51, 50, 50)" }}>Subject areas</p>
                        </div>
                    </div>
                    <div className="col-lg-2" style={{ marginBottom: "30px" }}>
                        <div
                            style={{
                                backgroundColor: "hsl(212, 100%, 91%)",
                                padding: "5px",
                                borderRadius: "8px",
                                textAlign: "center",
                                boxShadow: "-2px 2px 5px grey",
                            }}
                        >
                            <div style={{ fontSize: "2rem", color: "#4377B1", fontWeight: "bold" }}>750 +</div>
                            <p style={{ margin: 0, fontSize: "1rem", color: "rgb(51, 50, 50)" }}>Experts</p>
                        </div>
                    </div>
                    <div className="col-lg-2" style={{ marginBottom: "30px" }}>
                        <div
                            style={{
                                backgroundColor: "hsl(212, 100%, 91%)",
                                padding: "5px",
                                borderRadius: "8px",
                                textAlign: "center",
                                boxShadow: "-2px 2px 5px grey",
                            }}
                        >
                            <div style={{ fontSize: "2rem", color: "#4377B1", fontWeight: "bold" }}>16 +</div>
                            <p style={{ margin: 0, fontSize: "1rem", color: "rgb(51, 50, 50)" }}>Years of experience</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default GetEvery;
