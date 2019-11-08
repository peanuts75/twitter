import React, { Component } from 'react'
import { IoIosHome } from 'react-icons/io'
import { FaHashtag } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'
import { IoMdBookmark } from 'react-icons/io'
import { IoIosMore } from 'react-icons/io'
import { IoMdPerson } from 'react-icons/io'
import { IoLogoTwitter } from 'react-icons/io'
import {IoIosList} from 'react-icons/io'
import {IoMdCreate} from 'react-icons/io'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a className="Twitter" href="home">  <IoLogoTwitter /> </a>
        <a className="Home" href="home">  <IoIosHome /><span className="text"> Home </span> </a>
        <a className="Explore" href="explore"> <FaHashtag /> <span className="text"> Explore </span> </a>
        <a className="Notifications" href="notifications"> <IoIosNotifications /> <span className="text"> Notifications </span> </a>
        <a className="Messages" href="messages"> <IoIosMail /> <span className="text"> Messages </span> </a>
        <a className="Bookmarks" href="bookmarks"> <IoMdBookmark /> <span className="text"> Bookmarks </span> </a>
        <a className="Lists" href="lists"> <IoIosList /> <span className="text"> Lists </span> </a>
        <a className="Profile" href="#profile"> <IoMdPerson /> <span className="text"> Profile </span> </a>
        <a className="More" href="#more"><IoIosMore /> <span className="text"> More </span> </a>
        <a className="Tweet" href="#new"> <span className="tweet"> Tweet </span> </a>
        <a className="Feather" href="#new"> <IoMdCreate /> </a>
      </div>
    )
  }
}
