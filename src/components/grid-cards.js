import React from "react"
import { Link } from "gatsby"
import grid1 from "../images/Grid/grid1.jpg"
import grid2 from "../images/Grid/grid2.jpg"
import grid3 from "../images/Grid/grid3.jpg"
import grid4 from "../images/Grid/grid4.jpg"
import grid5 from "../images/Grid/grid5.jpg"
import grid6 from "../images/Grid/grid6.jpg"
import grid7 from "../images/Grid/grid7.jpg"
import grid8 from "../images/Grid/grid8.jpg"
import profile1 from "../images/Grid/Profile/profile1.jpg"
import profile2 from "../images/Grid/Profile/profile2.jpg"
import profile3 from "../images/Grid/Profile/profile3.jpg"
import profile4 from "../images/Grid/Profile/profile4.jpg"
import profile5 from "../images/Grid/Profile/profile5.jpg"
import profile6 from "../images/Grid/Profile/profile6.jpg"
import profile7 from "../images/Grid/Profile/profile7.jpg"
import profile8 from "../images/Grid/Profile/profile8.jpg"
import timeIcon from "../images/icons/timeIcon.png"
import metroIcon from "../images/icons/metroIcon.png"
import IconPlaylist from "../images/icons/iconPlaylist.svg"
import "../styles/components/grid-cards.scss"

const GridCards = () => {
  return (
    <>
      <section id="grid-cards" className="about">
        <div className="contain">
          <article>
            <div className="image grid1">
              <img src={grid1} alt="Lake Inniscarra, Ireland—Pyramid" />
              <div className="overlay">
                <div className="head">
                  <p>9</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>Lake Inniscarra, Ireland—Pyramid</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>30:53</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>6,248 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile1} alt="Profile" />
              </div>
            </div>
          </article>
          <article>
            <div className="image grid2">
              <img src={grid2} alt="Performance Series" />
              <div className="overlay">
                <div className="head">
                  <p>9</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>Performance Series</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>30:53</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>6,248 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile2} alt="Profile" />
              </div>
            </div>
          </article>
          <article>
            <div className="image grid3">
              <img src={grid3} alt="Slow Pulls and Fast Intervals" />
              <div className="overlay">
                <div className="head">
                  <p>9</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>Slow Pulls and Fast Intervals</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>44:13</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>9,948 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile3}  alt="Profile" />
              </div>
            </div>
          </article>
          <article>
            <div className="image grid4">
              <img src={grid4} alt="20 Minutes to Toned" />
              <div className="overlay">
                <div className="head">
                  <p>12</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>20 Minutes to Toned</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>30:53</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>6,248 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile4} alt="Profile" />
              </div>
            </div>
          </article>
          <article>
            <div className="image grid5">
              <img src={grid5} alt="Charles Race, Boston, Massachusetts" />
              <div className="overlay">
                <div className="head">
                  <p>9</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>Charles Race, Boston, Massachusetts</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>36:22</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>8,648 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile5} alt="Profile" />
              </div>
            </div>
          </article>
          <article>
            <div className="image grid6">
              <img src={grid6} alt="Full-Body HIIT Series" />
              <div className="overlay">
                <div className="head">
                  <p>12</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>Full-Body HIIT Series</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>30:53</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>6,248 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile6} alt="Profile" />
              </div>
            </div>
          </article>
          <article>
            <div className="image grid7">
              <img src={grid7} alt="Kafue River, Zambia—Power Stroke Pyramid" />
              <div className="overlay">
                <div className="head">
                  <p>9</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>Kafue River, Zambia—Power Stroke Pyramid</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>30:53</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>6,248 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile7} alt="Profile" />
              </div>
            </div>
          </article>
          <article>
            <div className="image grid8">
              <img src={grid8} alt="Shred & Burn Series" />
              <div className="overlay">
                <div className="head">
                  <p>16</p>
                </div>
                <div className="middle">
                  <p>Workouts</p>
                </div>
                <div className="bottom">
                  <img src={IconPlaylist} alt="Playlist" />
                </div>
              </div>
            </div>
            <div className="article-text">
              <div className="article-text-left">
                <h4>Shred & Burn Series</h4>
                <div className="article-info-contain">
                  <div className="article-info">
                    <img src={timeIcon} alt="Time" />
                    <p>22:22</p>
                  </div>
                  <div className="article-info">
                    <img src={metroIcon} alt="Metro Time" />
                    <p>4,660 M</p>
                  </div>
                </div>
                <Link to="/">View Details</Link>
              </div>
              <div className="article-text-right">
                <img src={profile8} alt="Profile" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default GridCards
