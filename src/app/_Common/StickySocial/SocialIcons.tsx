"use client";

import Link from "next/link";
import "./SocialIcon.css";

const SocialIcon = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="sticky-social">
                    <ul className="social">
                        <li className="fb">
                            <Link href="https://www.facebook.com/Manuscriptedit" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li className="twitter">
                            <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li className="insta">
                            <Link href="https://www.instagram.com/manuscriptedit/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li className="vim">
                            <Link href="https://www.youtube.com/@Manuscripteditdocs" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-youtube" aria-hidden="true"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SocialIcon;
