import React from "react";
import footerCSS from './../Footer/Footer.module.css'
import IMGmobile from './../../assets/app-store-google-play-logo.png'



function Footer () {
    return (
        <footer className={footerCSS.FooterWrapper}>
            <div className={footerCSS.banner}>
                <div className={footerCSS.content}>
                    <i className="ri-newspaper-line"></i>
                    <h2>Get the latest news and updates <span>Your Travel Journey Starts Here.</span></h2>
                </div>
                <div className={footerCSS.form}>
                    <input type="text" placeholder="Email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className={footerCSS.footerContainer}>
            <div className={footerCSS.footerLinks}>
                <h3>Company</h3>
                <a href="#">About Us</a>
                <a href="#">Carrers</a>
                <a href="#">Blog</a>
                <a href="#">Press</a>
                <a href="#">Gift Cards</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>Service</h3>
                <a href="#">Contact</a>
                <a href="#">Legal Notice</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms And Conditions</a>
                <a href="#">SiteMap</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>Other Service</h3>
                <a href="#">Car Hire</a>
                <a href="#">Activity Finder</a>
                <a href="#">Tour List</a>
                <a href="#">Flight Finder</a>
                <a href="#">Cruise Ticket</a>
                <a href="#">Holiday Special</a>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>Mobile</h3>
               <img src={IMGmobile} alt="" />
               
            </div>

            </div>

            {/* Copyright Bar */}
      <div className={footerCSS.copyright_bar}>
        <p>Tours And Travels in TRAVELGO</p>
        <p>© 2026 Shanthi. All rights reserved.</p>
      </div>
            

        </footer>
        
    )
}
export default Footer