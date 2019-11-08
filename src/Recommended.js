import React from 'react';
import './Recommended.css'
import ReactDOM from 'react-dom'
import {FaCog, FaSearch} from 'react-icons/fa'
import Cropd1 from './cropd1.png'
import Cropd2 from './cropd2.png'
import Cropd3 from './cropd3.png'

function Recommended() {
  return (
    <div className="Recommended">
        <div id="recInner">
          <div id="searchTwitter">
            <input type="text" placeholder="Search"/>
            <FaSearch className="searchIcon"/>
          </div>
          <div id="trendsForYou">
            <div className="recHead">
              <h1>Trends for you <a href=""><FaCog className="cog"/></a></h1>
            </div>
            <a href="#"><div className="trend">
              <p className="trendType">Trending in video games</p>
              <p className="hashTag">#Dewritos</p>
              <p className="tweetNumber">751, 995 Tweets</p>
            </div></a>
            <a href="#"><div className="trend">
              <p className="trendType">Trending in the UK</p>
              <p className="hashTag">#MoaningAboutTea</p>
              <p className="tweetNumber">555, 123 Tweets</p>
            </div></a>
            <a href="#"><div className="trend">
              <p className="trendType">Trending worldwide</p>
              <p className="hashTag">#BiggestPlanetOnEarth</p>
              <p className="tweetNumber">999, 666 Tweets</p>
            </div></a>
            <a href="#"><div className="trend">
              <p className="trendType">Trending in music</p>
              <p className="hashTag">#ClassicalHardPunkJazz</p>
              <p className="tweetNumber">123, 246 Tweets</p>
            </div></a>
            <a href="#"><div className="trend">
              <p className="trendType">Promoted by Mr Guy</p>
              <p className="hashTag">#GuyProducts</p>
              <p className="tweetNumber">Buy all the things!</p>
            </div></a>
            <a href="#"><div className="recFoot">
              <p className="showMore">Show more</p>
            </div></a>
          </div>
          <div id="whoToFollow">
            <div className="recHead">
              <h1>Who to follow</h1>
            </div>
            <a href="#"><div className="followable">
              <p><img src={Cropd1} className="followableIcon"/></p>
              <p className="twitterer">Micheal Mild</p>
              <p className="twitterHandle">#MilqueToastMike</p>
              <p className="followButton"><a href="#">Follow</a></p>
            </div></a>
            <a href="#"><div className="followable">
              <p><img src={Cropd2} className="followableIcon"/></p>
              <p className="twitterer">Montey Money</p>
              <p className="twitterHandle">#Burnsey</p>
              <p className="followButton"><a href="#">Follow</a></p>
            </div></a>
            <a href="#"><div class="followable">
              <p><img src={Cropd3} className="followableIcon"/></p>
              <p className="twitterer">Mr Macho</p>
              <p className="twitterHandle">#KittyWhisperer</p>
              <p className="followButton"><a href="#">Follow</a></p>
            </div></a>
            <a href="#"><div className="recFoot">
              <p className="showMore">Show more</p>
            </div></a>
          </div>
        </div>
    </div>
  );
}

export default Recommended;
