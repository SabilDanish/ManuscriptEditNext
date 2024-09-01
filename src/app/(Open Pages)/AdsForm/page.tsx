"use client"

import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import { DiscountBanner, DiscountMessage } from "../(Services)/(Publication Package Services)/PackageService/DiscountSection";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
    return (
        <>
            <div>
                <section className="pt-60 pb-50">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title text_center mb-50 mt-3">
                                    <div className="section_main_title">
                                        <h1>Publication Package Services</h1>
                                    </div>
                                    <div className="em_bar">
                                        <div className="em_bar_bg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_single-box st-grid-price" style={{ position: 'relative' }}>
                                <div className="discount-sticker">35% OFF</div>
                                <div className="pricing-head">
                                    <div className="pricing_title">
                                        <center><h4>Premium Plus Package</h4></center>
                                    </div>
                                    <div className="pricing_tk">
                                        <center>
                                            <h2>
                                                <span className="dollar">
                                                    <s>$2134</s> $1387
                                                </span>
                                                <span>30 Days</span>
                                            </h2>
                                        </center>
                                        <DiscountBanner />
                                    </div>
                                </div>
                                <div className="pricing_body">
                                    <div className="featur_itmes">
                                        <ul>
                                            <li>Peer Review Analysis</li>
                                            <li>Data Analysis</li>
                                            <li>Research Paper Writing</li>
                                            <li>Substantive Editing</li>
                                            <li>Journal Selection</li>
                                            <li>Journal Submission</li>
                                            <li>Target Journal Formatting</li>
                                            <li>Artwork Formatting</li>
                                            <li>Cover Letter Writing</li>
                                            <li>Response To Reviewer</li>
                                            <li>Plagiarism Check</li>
                                            <li>Unlimited Assistance</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('register') }}>Purchase Now <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('quotation') }}>Request a Quote <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <DiscountMessage /> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_single-box st-grid-price" style={{ position: 'relative' }}>
                                <div className="discount-sticker">35% OFF</div>
                                <div className="pricing-head">
                                    <div className="pricing_title">
                                        <center><h4>Premium Package</h4></center>
                                    </div>
                                    <div className="pricing_tk">
                                        <center>
                                            <h2>
                                                <span className="dollar">
                                                    <s>$1534</s> $997
                                                </span>
                                                <span>20 Days</span>
                                            </h2>
                                        </center>
                                        <DiscountBanner />
                                    </div>
                                </div>
                                <div className="pricing_body">
                                    <div className="featur_itmes">
                                        <ul>
                                            <li>Peer Review Analysis</li>
                                            <li>Substantive Editing</li>
                                            <li>Journal Selection</li>
                                            <li>Target Journal Formatting</li>
                                            <li>Artwork Formatting</li>
                                            <li>Cover Letter Writing</li>
                                            <li>Journal Submission</li>
                                            <li>Response to Reviewers* (*One response to reviewer free)</li>
                                            <li>Plagiarism Check</li>
                                            <li>Unlimited Assistance</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('register') }}>Purchase Now <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('quotation') }}>Request a Quote <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <DiscountMessage /> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_single-box st-grid-price" style={{ position: 'relative' }}>
                                <div className="discount-sticker">35% OFF</div>
                                <div className="pricing-head">
                                    <div className="pricing_title">
                                        <center><h4>Advanced Package</h4></center>
                                    </div>
                                    <div className="pricing_tk">
                                        <center>
                                            <h2>
                                                <span className="dollar">
                                                    <s>$1134</s> $737
                                                </span>
                                                <span>15 Days</span>
                                            </h2>
                                        </center>
                                        <DiscountBanner />
                                    </div>
                                </div>
                                <div className="pricing_body">
                                    <div className="featur_itmes">
                                        <ul>
                                            <li>Peer Review Analysis</li>
                                            <li>Substantive Editing</li>
                                            <li>Journal Selection</li>
                                            <li>Target Journal Formatting</li>
                                            <li>Cover Letter Writing</li>
                                            <li>Journal Submission</li>
                                            <li>Plagiarism Check</li>
                                            <li>Unlimited Assistance</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('register') }}>Purchase Now <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('quotation') }}>Request a Quote <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <DiscountMessage /> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_single-box st-grid-price" style={{ position: 'relative' }}>
                                <div className="discount-sticker">35% OFF</div>
                                <div className="pricing-head">
                                    <div className="pricing_title">
                                        <center><h4>Standard Package</h4></center>
                                    </div>
                                    <div className="pricing_tk">
                                        <center>
                                            <h2>
                                                <span className="dollar">
                                                    <s>$867</s> $563
                                                </span>
                                                <span>10 Days</span>
                                            </h2>
                                        </center>
                                        <DiscountBanner />
                                    </div>
                                </div>
                                <div className="pricing_body">
                                    <div className="featur_itmes">
                                        <ul>
                                            <li>Peer Review Analysis</li>
                                            <li>Journal Selection</li>
                                            <li>Target Journal Formatting</li>
                                            <li>Cover Letter Writing</li>
                                            <li>Journal Submission</li>
                                            <li>Unlimited Assistance</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('register') }}>Purchase Now <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <div className="pricing_button" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                    <a onClick={() => { redirect('quotation') }}>Request a Quote <i className="bi bi-arrow-right"></i></a>
                                </div>
                                <DiscountMessage /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
