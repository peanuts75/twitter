import React from 'react';
import './Recommended.css'
import ReactDOM from 'react-dom'
import { FaBeer } from 'react-icons/fa'


function Recommended() {
  return (
    <div className="Recommended">
        <div id="recInner">
          <div id="searchTwitter">
            <input innerLeft={<i><FaBeer /></i>} type="text"/>
          </div>
          <div id="trendsForYou">
            <div className="recHead">
              <h1>Trends for you (settings)</h1>
            </div>
            <div className="trend">
              <p className="trendType">Trend type</p>
              <p className="hashTag">Hashtag</p>
              <p className="tweetNumber">Tweetnumber</p>
            </div>
            <div className="trend">
              <p className="trendType">Trend type</p>
              <p className="hashTag">Hashtag</p>
              <p className="tweetNumber">Tweetnumber</p>
            </div>
            <div className="trend">
              <p className="trendType">Trend type</p>
              <p className="hashTag">Hashtag</p>
              <p className="tweetNumber">Tweetnumber</p>
            </div>
            <div className="trend">
              <p className="trendType">Trend type</p>
              <p className="hashTag">Hashtag</p>
              <p className="tweetNumber">Tweetnumber</p>
            </div>
            <div className="trend">
              <p className="trendType">Trend type</p>
              <p className="hashTag">Hashtag</p>
              <p className="tweetNumber">Tweetnumber</p>
            </div>
            <div className="trend">
              <p className="trendType">Trend type</p>
              <p className="hashTag">Hashtag</p>
              <p className="tweetNumber">Tweetnumber</p>
            </div>
            <div class="recFoot">
              <p className="showMore">Show more</p>
            </div>
          </div>
          <div id="whoToFollow">
            <div className="recHead">
              <h1>Who to follow</h1>
            </div>
            <div class="followable">
              <p>Icon</p>
              <p className="twitterer">Twitterer</p>
              <p className="twitterHandle">Twitter handle</p>
            </div>
            <div class="followable">
              <p>Icon</p>
              <p className="twitterer">Twitterer</p>
              <p className="twitterHandle">Twitter handle</p>
            </div>
            <div class="followable">
              <p>Icon</p>
              <p className="twitterer">Twitterer</p>
              <p className="twitterHandle">Twitter handle</p>
            </div>
            <div class="recFoot">
              <p className="showMore">Show more</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Recommended;
