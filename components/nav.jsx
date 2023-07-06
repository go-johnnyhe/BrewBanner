import React from "react"

export default function Nav() {

  return (

    <section className="top-nav">
      <div className="nav-logo">
        BrewBanner
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <li>Home</li>
        <li>Advertise</li>
        <li>Distribute</li>
        <li>Contact</li>
        <li>Support</li>
        <li>Socials</li>
      </ul>
    </section>
  )
}