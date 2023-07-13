import React from "react"

export default function Nav() {

  return (

    // <section className="top-nav">
    //   <div className="nav-logo">
    //     brewbanner
    //   </div>
    //   <input id="menu-toggle" type="checkbox" />
    //   <label className='menu-button-container' htmlFor="menu-toggle">
    //     <div className='menu-button'></div>
    //   </label>
    //   <ul className="menu">
    //     <li><a href='/'>Home</a></li>
    //     <li>Advertise</li>
    //     <li>Distribute</li>
    //     <li><a href='/contact'>Contact</a></li>
    //     <li>Support</li>
    //     <li>Socials</li>
    //   </ul>
    // </section>
    <section className="top-nav">
    <div className="nav-logo">
      brewbanner
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
      <div className='menu-button'></div>
    </label>
    <ul className="menu">
      <li><a href='/'>Home</a></li>
      <li><a href='/soon'>Advertise</a></li>
      <li><a href='/soon'>Distribute</a></li>
      <li className="new-logo"><a href='/'>brewbanner</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/soon'>Support</a></li>
      <li><a href='/soon'>Socials</a></li>
    </ul>
  </section>
  )
}