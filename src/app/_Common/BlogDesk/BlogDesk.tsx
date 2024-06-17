"use client"

import "./BlogDesk.css"
import image4 from "../../utils/images/blog-banner1.jpg";
import image5 from "../../utils/images/Blog-banner2.jpg";
import image6 from "../../utils/images/blog-banner-3.jpg";
import Link from "next/link";

const BlogDesk = () => {


    return (
        <>


            <div className="container BlogDesktop" style={{ marginTop: "30px" }} >
                <div className="row" style={{ justifyContent: "center" }}>
                    <h1 className="accordion__title" style={{ marginTop: "30px", marginBottom: "40px" }}>OUR BEST-READ SCIENTIFIC ARTICLES</h1>
                </div>
            </div>

            <div className="container BlogDesktop">
                <div className="row">
                    <div className="col-lg-4">

                        <Link href={"https://www.manuscriptedit.com/scholar-hangout/"}>
                            <div className="card" >
                                <img src={image4.src} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <p className="card-text">Exploring the Importance of Google Scholar Citations for Researchers...</p>
                                    <p className="card-title">-May 28, 2024</p>
                                </div>
                            </div>
                        </Link>


                    </div>

                    <div className="col-lg-4">


                        <Link href={"https://www.manuscriptedit.com/scholar-hangout/"}>
                            <div className="card" >
                                <img src={image5.src} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <p className="card-text">Navigating the Legal Landscape: The Controversy Surrounding Sci-Hub</p>
                                    <p className="card-title">-May 28, 2024</p>
                                </div>
                            </div>

                        </Link>


                    </div>

                    <div className="col-lg-4">

                        <Link href={"https://www.manuscriptedit.com/scholar-hangout/"}>
                            <div className="card" >
                                <img src={image6.src} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <p className="card-text">Strategies for Effective Time Management in Academic Research</p>

                                    <p className="card-title">-May 28, 2024</p>
                                </div>
                            </div>

                        </Link>


                    </div>
                </div>
            </div>



        </>
    )

}

export default BlogDesk;