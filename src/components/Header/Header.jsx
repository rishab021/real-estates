import React from "react"
import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">

                <img src="./logo.png" alt="logo" width={100} />


                <div className="flexCenter h-menu">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Saved</a>
                    <a href="">Get Started</a>
                    <button className="btn">
                        <a href="">Contact Us</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header
