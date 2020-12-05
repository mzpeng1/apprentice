import React from 'react';
import "./Topics.css";

import academics from "../images/academicslogo.png";
import living from "../images/livinglogo.png";
import finance from "../images/financelogo.png";
import health from "../images/healthlogo.png";
import banner_man from "../images/banner_man.png";

function Topics() {
    return (
        <div className='topics'>
        <div className="breakBar"></div>
        <div className="topics__banner">
            <div className="topics__banner__img">
                <img src={banner_man} alt="" />
            </div>
            <div className="topics__banner__text">
                <h1>your <u>friendly</u> guide to college life.</h1>
                <h3>We are here to give you guidence, <u>from</u> college students <u>to</u> college students.</h3>
                <div className="topics__banner__button">
                    Learn More
                </div>
            </div>
        </div>
        <div className="topics__boxes">
            <div className="topics__boxes__text">
                <h1>what can i learn?</h1>
            </div>
            <div className="topics__box">
                <img src={academics} alt=""/>
                <div className="topics__box__text">
                    <h2 className="academicsColor"><u>Academics</u></h2>
                    <h4>Need better study habits?</h4>
                    <h4>How to get your mentors?</h4>
                    <br></br>
                    <h4>We provide resources for all</h4> <h4>school-related frustrations!</h4>
                    <div className="topics__box__button">
                        Learn More
                    </div>
                </div>
           </div>
            <div className="topics__box">
                <img src={living} alt=""/>
                <div className="topics__box__text">
                    <h2 className="livingColor"><u>Living</u></h2>
                    <h4>How does Greek Life work?</h4>
                    <h4>Where's the best place to dorm?</h4>
                    <h4>What's the best way to make friends?</h4> <br></br>
                    <h4>All things social and everyday life!</h4>
                    <div className="topics__box__button">
                        Learn More
                    </div>
                </div>
           </div>
            <div className="topics__box">
                <img src={finance} alt=""/>
                <div className="topics__box__text">
                    <h2 className="financeColor"><u>Finance</u></h2>
                    <h4>How do I budget?</h4>
                    <h4>What scholarships can I get?</h4>
                    <br></br>
                    <h4>Money is confusing! But</h4> <h4>basic financial advice is here!</h4>
                    <div className="topics__box__button">
                        Learn More
                    </div>
                </div>
           </div>
            <div className="topics__box">
                <img src={health} alt=""/>
                <div className="topics__box__text">
                    <h2 className="healthColor"><u>Health</u></h2>
                    <h4>Easy workout suggestions?</h4>
                    <h4>Best recipes if I've never cooked before?</h4>
                    <br></br>
                    <h4>Let's keep you healthy while you</h4> <h4>work hard to do your best!</h4>
                    <div className="topics__box__button">
                        Learn More
                    </div>
                </div>
           </div></div>

        </div>
    )
}

export default Topics
