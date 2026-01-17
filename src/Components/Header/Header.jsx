import React from 'react'
import headerCSS from './../Header/Header.module.css'

 function Header() {
  return (
    <div className={`${headerCSS.HeaderWrapper} section`} id="home">
    <div className={headerCSS.Container}>
        <h1>Find Next Place To Trip</h1>
    <small>Discover New Places At Exclusive Deals</small>

    <form >

        <div className={headerCSS.inputWrapper}>
            <label>Location</label>
            <input type="text" placeholder="Enter Location"/>
        </div>

         <div className={headerCSS.inputWrapper}>
            <label>Check In / Check Out</label>
            <input type="datetime-local" />
        </div>

        <button><i className="ri-search-line"></i>Search</button>
    </form>
    </div>
    </div>
  )
}
export default Header

