import React, { Component } from 'react'
import { IoIosHome } from 'react-icons/io'
import { FaHashtag } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { IoMdBookmark } from 'react-icons/io'
import { IoIosMore } from 'react-icons/io'
import { IoMdPerson } from 'react-icons/io'
import { IoLogoTwitter } from 'react-icons/io'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a className="Twitter" href="home"> <IoLogoTwitter /> </a>
        <a className="Home" href="home">  <IoIosHome /> Home </a>
        <a className="Explore" href="explore"> <FaHashtag /> Explore </a>
        <a className="Notifications" href="notifications"> <IoIosNotifications /> Notifications </a>
        <a className="Messages" href="messages"> <IoIosMail /> Messages </a>
        <a className="Bookmarks" href="bookmarks"> <IoMdBookmark /> Bookmarks </a>
        <a className="Lists" href="lists"> <IoMdBookmark /> Lists </a>
        <a className="Profile" href="#profile"> <IoMdPerson /> Profile </a>
        <a className="More" href="#more"><IoIosMore /> More </a>
        <a className="Tweet" href="#new"> Tweet </a>
      </div>
    )
  }
}