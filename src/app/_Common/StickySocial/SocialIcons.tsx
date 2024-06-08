"use client";

import "./SocialIcon.css";




const SocialIcon = () => {

    return (
        <>

            <div className="container">
                <div className="row">

                    <div className="sticky-social">
                        <ul className="social">
                            <li className="fb"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="twitter"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="insta"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li className="pin"><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                            <li className="vim"><a href="#"><i className="fa fa-vimeo" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )

}

export default SocialIcon;