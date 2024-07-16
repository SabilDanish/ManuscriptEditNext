"use client";


import "./BlogDetails.css";
import { DNA } from "react-loader-spinner";


const BlogDetailsNext = () => {

    return (
        <>
            <div className="container" style={{ background: "white" }}>
                <div className="row">
                    <div className="col-lg-12 DeatilsCon">

                        <div> <strong><p>Home /</p></strong></div>
                        <div> <strong><p>Schools and Universities /</p></strong></div>
                        <div> <strong><p>History and Evolution of the Arabian Journal for Science and Engineering /</p></strong></div>
                    </div>

                    <div className="col-lg-12">
                        <div> <strong><h3>History and Evolution of the Arabian Journal for Science and Engineering</h3></strong></div>
                    </div>

                    <div className="col-lg-12 DeatilsCon">

                        <div> <strong><p>June 26, 2024</p></strong></div>
                        <div> <strong><p>Team Manuscript</p></strong></div>
                    </div>


                    <div className="col-lg-12">

                        <img className="DetailsImg" src="/images/innerimg/Image-1-scaled.jpg" alt="#" />
                    </div>

                    <div className="padTop">

                        <div className="col-lg-12">
                            <p>King Fahd University peer-reviewed process Arabian Journal for Science and Engineering (AJSE), essential to advancing scientific publishing. The AJSE’s rigorous peer-reviewed process advances knowledge and innovation by ensuring high-quality research in various subjects.</p>
                            <p>Who Is the Publisher of the Arabian Journal for Science and Engineering?
                                Springer and the prestigious King Fahd University of Petroleum & Minerals (KFUPM) jointly published the AJSE through a collaborative effort. This hybrid open-access journal, with an impact factor of 2.9 as of 2022, is a testament to their shared commitment to advancing research in science and engineering fields.</p>
                        </div>

                    </div>

                </div>
            </div>


        </>
    );
}

export default BlogDetailsNext;
