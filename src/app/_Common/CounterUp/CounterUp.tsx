import React from 'react';
import CountUp from 'react-countup';
import "./CounterUp.css"

const CounterComponent = () => {
    return (


        <div className="container" style={{marginBottom:"30px"}}>
            <div className="row" style={{justifyContent:"space-evenly"}}>
                <div className="col-lg-3 counteupPart">
                    <h5 className="counterHeading">
                        <CountUp
                            start={0}
                            end={10000}
                            duration={5}
                            suffix=" +"
                        />

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
                        <p className="CounterPara">Subject Areas</p>
                    </h5>
                </div>

            </div>
        </div>

    );
};

export default CounterComponent;
