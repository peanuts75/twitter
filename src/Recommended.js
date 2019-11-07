import React from 'react';
import './Recommended.css'
import ReactDOM from 'react-dom'
import {FaCog, FaPersonBooth} from 'react-icons/fa'
import Cropd1 from './cropd1.png'
import Cropd2 from './cropd2.png'
import Cropd3 from './cropd3.png'

function Recommended() {
  return (
    <div className="Recommended">
        <div id="recInner">
          <div id="searchTwitter">
            <input type="text"/>
          </div>
          <div id="trendsForYou">
            <div className="recHead">
              <h1>Trends for you <a href=""><FaCog className="cog"/></a></h1>
            </div>
            <div className="trend">
              <p className="trendType">Trending in video games</p>
              <p className="hashTag"><a href="#">#Gamers</a></p>
              <p className="tweetNumber">751, 995 Tweets</p>
            </div>
            <div className="trend">
              <p className="trendType">Trending in the UK</p>
              <p className="hashTag"><a href="#">#Brits</a></p>
              <p className="tweetNumber">555, 123 Tweets</p>
            </div>
            <div className="trend">
              <p className="trendType">Trend worldwide</p>
              <p className="hashTag"><a href="#">#Peopling</a></p>
              <p className="tweetNumber">999, 666 Tweets</p>
            </div>
            <div className="trend">
              <p className="trendType">Trending in music</p>
              <p className="hashTag"><a href="#">#DJ</a></p>
              <p className="tweetNumber">123, 246 Tweets</p>
            </div>
            <div className="trend">
              <p className="trendType">Promoted by Mr Guy</p>
              <p className="hashTag"><a href="#">#GuyProducts</a></p>
              <p className="tweetNumber">Buy all the things!</p>
            </div>
            <div className="recFoot">
              <p className="showMore"><a href="#">Show more</a></p>
            </div>
          </div>
          <div id="whoToFollow">
            <div className="recHead">
              <h1>Who to follow</h1>
            </div>
            <div className="followable">
              <p><img src={Cropd1} className="followableIcon"/></p>
              <p className="twitterer">Micheal Mild</p>
              <p className="twitterHandle">#Milquetoastmike</p>
              <p className="followButton"><a href="#">Follow</a></p>
            </div>
            <div className="followable">
              <p><img src={Cropd2} className="followableIcon"/></p>
              <p className="twitterer">Montey Money</p>
              <p className="twitterHandle">#Burnsey</p>
              <p className="followButton"><a href="#">Follow</a></p>
            </div>
            <div class="followable">
              <p><img src={Cropd3} className="followableIcon"/></p>
              <p className="twitterer">Mr Macho</p>
              <p className="twitterHandle">#Kittywhisperer</p>
              <p className="followButton"><a href="#">Follow</a></p>
            </div>
            <div className="recFoot">
              <p className="showMore"><a href="#">Show more</a></p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Recommended;
