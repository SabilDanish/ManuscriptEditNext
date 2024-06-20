"use client"
import "./GlobalPartner.css";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";


const GlobalPartner = () => {
    return (
        <>
            {breadcrum(
                "Home / More",
                "Partner Program"
            )}

            <div className="container containerGlobal">
                <div className="row">
                    <h4 className="Global-Header">
                        Publishers, Universities, Research Groups can get upto 20% discounts on all End-to-End Editorial and Journal Publication services for their Researchers for becoming our Service Partners.
                    </h4>
                </div>


                {/* <div className="row">
                    <div className="col-lg-12 askusbtn">
                        <img src="/images/GlobalPartners/partnerpgm-min.jpg" className="GlobalImage" alt="#" />
                    </div>

                    <div className="col-lg-12 askusbtn">
                        <button className="globalbtn">Ask Us</button>
                    </div>
                </div> */}
            </div>


            <div className="container containerGlobal">
                <div className="row">
                    <div className="col-lg-3 centroidGlobal">
                        <img src="/images/GlobalPartners/jor-min.jpeg" alt="#" />
                    </div>

                    <div className="col-lg-8 Mid-content">
                        <h5 className="GlobalHeadingMid" style={{ color: '#40abaa' }}>JOR@ME</h5>

                        <p>We offer a wide spectrum of services to scientific and non-scientific journals. Our services include marketing, peer review, editorial support, typesetting, indexing, and digital branding.</p>
                    </div>
                </div>
            </div>

            <div className="container containerGlobal">
                <div className="row">
                    <div className="col-lg-3 centroidGlobal">
                        <img src="/images/GlobalPartners/lab.jpg" alt="#" />
                    </div>

                    <div className="col-lg-8 Mid-content">
                        <h5 className="GlobalHeadingMid" style={{ color: '#fdc62c' }}>JOR@ME</h5>

                        <p>We offer a wide spectrum of services to scientific and non-scientific journals. Our services include marketing, peer review, editorial support, typesetting, indexing, and digital branding.</p>
                    </div>
                </div>
            </div>

            <div className="container containerGlobal">
                <div className="row">
                    <div className="col-lg-3 centroidGlobal">
                        <img src="/images/GlobalPartners/univ.jpg" alt="#" />
                    </div>

                    <div className="col-lg-8 Mid-content">
                        <h5 className="GlobalHeadingMid" style={{ color: '#e13656' }}>JOR@ME</h5>

                        <p>We offer a wide spectrum of services to scientific and non-scientific journals. Our services include marketing, peer review, editorial support, typesetting, indexing, and digital branding.</p>
                    </div>
                </div>
            </div>

            <div className="container containerGlobal" style={{ marginBottom: "52px" }}>
                <div className="row">
                    <div className="col-lg-3 centroidGlobal">
                        <img src="/images/GlobalPartners/corp.jpg" alt="#" />
                    </div>

                    <div className="col-lg-8 Mid-content">
                        <h5 className="GlobalHeadingMid" style={{ color: '#3c7a98' }}>JOR@ME</h5>

                        <p>We offer a wide spectrum of services to scientific and non-scientific journals. Our services include marketing, peer review, editorial support, typesetting, indexing, and digital branding.</p>
                    </div>
                </div>

                <div className="col-lg-12 askusbtn">
                        <button className="globalbtn">Ask Us</button>
                    </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h5 style={{ textAlign: 'center' }}>Request Partner Program Information</h5>
                    </div>
                </div>
            </div>


            <div className="container containerGlobal2 ">
                <form>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label >First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>

                        <div className="form-group col-md-6">
                            <label >Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>

                        <div className="form-group col-md-6">
                            <label >Prefered Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Prefered Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Phone</label>
                            <input type="phone" className="form-control" placeholder="Phone Number" />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >City</label>
                            <input type="text" className="form-control" placeholder="Profession" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label >Organisation</label>
                            <input type="text" className="form-control" placeholder="Organisation" />
                        </div>


                        <div className="form-group col-md-6">
                            <label >State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>


                        <div className="form-group col-md-12">
                            <label >Organisation</label>
                            <textarea name="description" className="form-control" id="description" placeholder="Description" style={{width:'100%' ,color:'grey'}}></textarea>
                        </div>


                        
                        

                    </div>

                    <button type="submit" className="globalbtn">Sign in</button>
                </form>
            </div>


        </>
    )

}


export default GlobalPartner;