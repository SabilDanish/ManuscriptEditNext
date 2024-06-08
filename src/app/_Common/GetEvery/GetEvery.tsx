"use client";

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
                                    GET HELP WITH PUBLICATION ASSISTANCE
                                </h5>
                                <a href="" style={{ color: "#a31e22", textDecoration: 'none' }}>
                                    Know more &rarr;
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3" style={{ marginTop: "20px" }}>
                            <div className="getHelp" style={{ backgroundColor: '#f3d5d5', padding: "22px", borderRadius: "22px", boxShadow: "1px 1px 8px grey" }}>
                                <h5>
                                    GET EDITING AND LANGUAGE HELP
                                </h5>
                                <a href="" style={{ color: "#a31e22", textDecoration: 'none' }}>
                                    Know more &rarr;
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3" style={{ marginTop: "20px" }}>
                            <div className="getHelp" style={{ backgroundColor: '#f3d5d5', padding: "22px", borderRadius: "22px", boxShadow: "1px 1px 8px grey" }}>
                                <h5>
                                    GET PhD & MASTER THESIS ASSISTANCE
                                </h5>
                                <a href="" style={{ color: "#a31e22", textDecoration: 'none' }}>
                                    Know more &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetEvery;
