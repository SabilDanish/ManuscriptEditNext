import React from 'react';
import CountUp from 'react-countup';
import "./CounterUp.css"

const CounterComponent = () => {
    return (


        <div className="container-fluid" style={{ marginBottom: "30px" }}>
            <div className="row" style={{ justifyContent: "space-evenly" }}>
                <div className="col-lg-3 counteupPart">
                    <h5 className="counterHeading">
                        <CountUp
                            start={0}
                            end={10000}
                            duration={5}
                            suffix=" +"
                        />

                        <div className="dividerzz1"></div>

                        <p className="CounterPara">Publications</p>
                    </h5>
                </div>

                <div className="col-lg-3 counteupPart">
                    <h5 className="counterHeading">
                        <CountUp
                            start={0}
                            end={750}
                            duration={5}
                            suffix=" +"
                        />

                        <div className="dividerzz1"></div>
                        <p className="CounterPara">Experts</p>
                    </h5>
                </div>

                <div className="col-lg-3 counteupPart">
                    <h5 className="counterHeading">
                        <CountUp
                            start={0}
                            end={1117}
                            duration={5}
                            suffix=" +"
                        />

                        <div className="dividerzz1"></div>
                        <p className="CounterPara">Subject Areas</p>
                    </h5>
                </div>

            </div>
        </div>

    );
};

export default CounterComponent;
