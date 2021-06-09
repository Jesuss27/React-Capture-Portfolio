import React from "react"; 
import clock from "../images/clock.svg"
import diaphragm from "../images/diaphragm.svg"
import money from "../images/money.svg"
import teamwork from "../images/teamwork.svg"
import workStation from "../images/workStation.jpg"

const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>Top <span>Quality</span> Service</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>Efficient</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>Precise</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Cooperative</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>Affordable</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                   
                </div>
                <div className="image">
                    <img src={workStation} alt="" />
                </div>
            </div>
        </div>

    )
}

export default ServicesSection