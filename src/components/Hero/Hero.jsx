import React from "react"
// import React, {useState} from  'react'
import "./Hero.css";
// import searchBar from "./Search Bar/searchBar";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* Left Section */}
                <div className="flexColStart hero-left">
                    <div className="circle" />
                    <div className="hero-title">
                        <h1>Discover <br/>The Most Suitable<br/> Properties</h1>
                    </div>
                    <div className="flexColStart hero-descrip">
                        <span>Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="search-engine">
                    {/* <searchBar /> */}
                        <p>Search Here</p>
                    </div>
                </div>
                {/* Right Section */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;