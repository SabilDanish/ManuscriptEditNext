"use client"

import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';
import "./Webinar.css";
import Link from 'next/link';
import useFormWebReg from '@/app/hooks/WebinarRegister/useWebReg';

const Webinar = () => {

    const [formWeb, setFormWeb] = useState({
        name: "",
        email: "",
        pswd: "",
        phone_no: "",
        confirmpswd: ""
    });

    const formRef = useRef<any>(null);

    const { isLoading, postData } = useFormWebReg();

    const [isLogin, setIsLogin] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    }

    const formHandler = (event: any) => {
        const { name, value } = event.target;
        setFormWeb({ ...formWeb, [name]: value });
    };

    const formSubmitHandler = (e: any) => {
        e.preventDefault();
        if (isFormValid()) {
            postData(formWeb);
        }
    };

    const isFormValid = () => {
        const { name, email, pswd, confirmpswd } = formWeb;
        return name && email && pswd && pswd === confirmpswd;
    };

    return (
        <div className="container webContainer">
            <div className="row WebRow">
                <div className="col-lg-7">
                    <img className="ImgWeb" src="/images/GlobalPartners/Webinar.jpg" alt="Webinar" />

                    <div className="card-body" style={{ background: 'white' }}>
                        <p className="card-text">
                            Name : Research Planning, Designing and Writing Research Paper for High Impact Journal Publication <br />
                            Date : 27th April, 2024 <br />
                            Time : 11AM (IST)
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: "#a31e22" }}>* Note to candidates: </h3>
                        <p>Those who have already registered, kindly login and book your slot in your dashboard. Those who have not registered and new to the website, kindly register to book your slot for the webinar.</p>
                    </div>
                </div>

                <div className="col-lg-4 webSeminar">
                    {isLogin ? (
                        <form className='LoginForm'>
                            <h5 className="headingweb5">Log In to Your Account</h5>
                            <p className="paragraphweb">Welcome back! Please log in to continue.</p>

                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                                </div>
                                <input type="text" className="form-control" id="loginEmail" placeholder="Email Address" />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                </div>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <Link href={'https://secure.manuscriptedit.com/register'}><button className='webButton'>Log In</button></Link>
                                <hr />
                                <p style={{ textAlign: "center", cursor: "pointer" }} onClick={toggleForm}>Don't have an account? <span className='webspan'>Sign Up</span></p>
                            </div>
                        </form>
                    ) : (
                        <form>
                            <h5 className="headingweb5">Register for the Free Webinar & Q&A Session</h5>
                            <p className="paragraphweb">Get a free ManuscriptEdit account after registration</p>

                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                                <input name="name" type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" onChange={formHandler} />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                                </div>
                                <input name="email" type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email Address" onChange={formHandler} />
                            </div>

                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
                                </div>
                                <input name="phone_no" type="number" className="form-control" id="formGroupExampleInput3" placeholder="Phone Number" onChange={formHandler} />
                            </div>

                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                </div>
                                <input name='pswd' type="password" className="form-control" id="formGroupExampleInput4" placeholder="Enter Password" onChange={formHandler} />
                            </div>

                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                                </div>
                                <input name='confirmpswd' type="password" className="form-control" id="formGroupExampleInput5" placeholder="Confirm Password" onChange={formHandler} />
                            </div>

                            <div className="form-group">
                                <button type="submit" className='webButton' onClick={formSubmitHandler} disabled={!isFormValid()}>Register</button>
                                <hr />
                                <p style={{ textAlign: "center", cursor: "pointer" }} >Have an account? <Link href={'https://secure.manuscriptedit.com/register'}><span className='webspan'>Log In</span></Link></p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Webinar;
