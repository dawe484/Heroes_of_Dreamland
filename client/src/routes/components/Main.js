import React, { Component } from 'react';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <main id="main">
        <div id="showcase" className="grid">
          <div className="pimage1">
            <div className="ptext">
              <div />
              <h1>Angelica available now!</h1>
              <div />
              <div />
              <h4>New Champion</h4>
              {/* Champion Update / New Champion */}
              <div />
              <div />
              <div className="read-more">
                <a href="" className="btn">
                  Read More
                </a>
              </div>
              <div />
            </div>
          </div>
        </div>

        <div id="section-a" className="grid">
          <div className="content-wrap">
            {/* <!-- Latest News --> */}
            <h2 className="container content-title" id="news">
              Latest News
            </h2>
            <div className="hod-news container">
              {/* <!-- Single News Block --> */}
              <div className="news-one">
                <a href="" className="a-img">
                  <div className="news-img">
                    <img
                      src="https://cdn-html.nkdev.info/youplay/assets/images/dark/game-bloodborne-500x375.jpg"
                      alt="News 1"
                    />
                  </div>
                </a>
                <div className="news-text">
                  <div className="news-header">
                    <h3 className="news-title">
                      <a href="">Bloodborne - First Try!</a>
                    </h3>
                    <span className="date">Today</span>
                  </div>
                  <div className="news-description">
                    Cras ultricies ligula sed magna dictum porta. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui. Sed
                    porttitor lectus nibh. Donec sollicitudin molestie
                    malesuada. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Nulla quis lorem ut libero malesuada feugiat.
                  </div>
                  <div className="read-more">
                    <a href="" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- //Single News Block --> */}
              {/* <!-- Single News Block --> */}
              <div className="news-one">
                <a href="" className="a-img">
                  <div className="news-img">
                    <img
                      src="https://cdn-html.nkdev.info/youplay/assets/images/dark/game-dark-souls-ii-500x375.jpg"
                      alt="News 2"
                    />
                  </div>
                </a>
                <div className="news-text">
                  <div className="news-header">
                    <h3 className="news-title">
                      <a href="">Dark Souls II</a>
                    </h3>
                    <span className="date">March 9, 2018</span>
                  </div>
                  <div className="news-description">
                    Cras ultricies ligula sed magna dictum porta. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui. Sed
                    porttitor lectus nibh. Donec sollicitudin molestie
                    malesuada. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Nulla quis lorem ut libero malesuada feugiat.
                  </div>
                  <div className="read-more">
                    <a href="" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- //Single News Block --> */}
              {/* <!-- Single News Block --> */}
              <div className="news-one">
                <a href="" className="a-img">
                  <div className="news-img">
                    <img
                      src="https://cdn-html.nkdev.info/youplay/assets/images/dark/game-kingdoms-of-amalur-reckoning-500x375.jpg"
                      alt="News 3"
                    />
                  </div>
                </a>
                <div className="news-text">
                  <div className="news-header">
                    <h3 className="news-title">
                      <a href="">Review Kingdoms of Amalur</a>
                    </h3>
                    <span className="date">March 1, 2018</span>
                  </div>
                  <div className="news-description">
                    Cras ultricies ligula sed magna dictum porta. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui. Sed
                    porttitor lectus nibh. Donec sollicitudin molestie
                    malesuada. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Nulla quis lorem ut libero malesuada feugiat.
                  </div>
                  <div className="read-more">
                    <a href="" className="btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- //Single News Block --> */}
            </div>
            {/* <!-- //Latest News --> */}
          </div>
        </div>

        <div className="pimage2">
          <div className="ptext">
            <div />
            <h2>Heroes of Dreamland</h2>
            <div />
            <div />
            <div className="read-more">
              <a href="" className="btn">
                Pre-Order
              </a>
            </div>
            <div />
          </div>
        </div>

        <div id="section-b" className="grid">
          {/* <!-- Game Info --> */}
          <h2 className="container content-title" id="game-info">
            Game Info
          </h2>
          <div className="container media-content">
            <div className="media-card heroes">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-1-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Heroes</div>
              </a>
            </div>
            <div className="media-card glyphs">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-2-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Glyphs</div>
              </a>
            </div>
            <div className="media-card equip">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-3-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Equip</div>
              </a>
            </div>
            <div className="media-card game-modes">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-4-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Game Modes</div>
              </a>
            </div>
          </div>
          {/* <!-- //Game Info --> */}
        </div>

        <div className="pimage3">
          <section id="section-c" className="grid">
            <div className="content-wrap">
              <h2 className="">What gamers are saying</h2>
              <div className="container info">
                {/* <!-- Single Card Block --> */}
                <div className="card">
                  <div className="card-content">
                    <p className="">
                      Purus purus penatibus tempus est risus elit convallis
                      ultrices adipiscing et mollis fames vivamus.
                    </p>
                    <small className="author-name">Rembrandt</small>
                    <img
                      className="img-circle"
                      src="https://cdn-html.nkdev.info/youplay/assets/images/anime/avatar-user-2.png"
                      alt="User 1"
                    />
                  </div>
                </div>
                {/* <!-- //Single Card Block --> */}
                {/* <!-- Single Card Block --> */}
                <div className="card">
                  <div className="card-content">
                    <p className="">
                      Lacus Ut varius viverra vestibulum eleifend consectetuer
                      proin accumsan pretium dis ultrices, hendrerit platea.
                      Suspendisse Nunc. Ligula phasellus iaculis torquent.
                    </p>
                    <small className="author-name">Michelangelo</small>
                    <img
                      className="img-circle"
                      src="https://cdn-html.nkdev.info/youplay/assets/images/anime/avatar-user-3.png"
                      alt="User 2"
                    />
                  </div>
                </div>
                {/* <!-- //Single Card Block --> */}
                {/* <!-- Single Card Block --> */}
                <div className="card">
                  <div className="card-content">
                    <p className="">
                      Curae, sodales facilisi, lacus fringilla ridiculus cras,
                      sed, class class. Class per faucibus eget Aliquam quam
                      interdum vehicula Pretium dolor. Nunc nascetur urna
                      phasellus.
                    </p>
                    <small className="author-name">Leonardo da Vinci</small>
                    <img
                      className="img-circle"
                      src="https://cdn-html.nkdev.info/youplay/assets/images/anime/avatar-user-4.png"
                      alt="User 3"
                    />
                  </div>
                </div>
                {/* <!-- //Single Card Block --> */}
              </div>
            </div>
          </section>
        </div>

        <div id="section-d" className="grid">
          {/* <!-- Media --> */}
          <h2 className="container content-title" id="media">
            Media
          </h2>
          <div className="container media-content">
            <div className="media-card screenshots">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-1-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Screenshots</div>
              </a>
            </div>
            <div className="media-card artworks">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-2-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Artworks</div>
              </a>
            </div>
            <div className="media-card wallpapers">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-3-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Wallpapers</div>
              </a>
            </div>
            <div className="media-card videos">
              <a href="" className="a-img">
                <div className="img">
                  <img
                    src="https://cdn-html.nkdev.info/youplay/assets/images/anime/game-brs-4-500x375.jpg"
                    alt=""
                  />
                  <svg
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>zoom-in</title>
                    <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM14 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" />
                  </svg>
                </div>
                <div className="media-title">Videos</div>
              </a>
            </div>
          </div>
          {/* <!-- //Media --> */}
        </div>

        <div className="pimage3">
          <section id="section-e" className="grid">
            <div className="content-wrap">
              <h2 className="">
                Connect socially with<br />
                <strong>Heroes of Dreamland</strong>
              </h2>
              {/* <!-- Social Buttons --> */}
              <div className="container social-icons">
                {/* <!-- Single Social Icon Block --> */}
                <div className="social-icon twitch">
                  <a href="">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>twitch</title>
                      <path d="M3 0l-3 5v23h8v4h4l4-4h5l9-9v-19h-27zM26 17l-5 5h-5l-4 4v-4h-6v-18h20v13z" />
                      <path d="M19 8h3v8h-3v-8z" />
                      <path d="M13 8h3v8h-3v-8z" />
                    </svg>
                    <span>Watch on Twitch</span>
                  </a>
                </div>
                {/* <!-- //Single Social Icon Block --> */}
                {/* <!-- Single Social Icon Block --> */}
                <div className="social-icon youtube">
                  <a href="">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>youtube</title>
                      <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z" />
                    </svg>
                    <span>Watch on Youtube</span>
                  </a>
                </div>
                {/* <!-- //Single Social Icon Block --> */}
                {/* <!-- Single Social Icon Block --> */}
                <div className="social-icon twitter">
                  <a href="">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>twitter</title>
                      <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z" />
                    </svg>
                    <span>Follow on Twitter</span>
                  </a>
                </div>
                {/* <!-- //Single Social Icon Block --> */}
                {/* <!-- Single Social Icon Block --> */}
                <div className="social-icon instagram">
                  <a href="">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>instagram</title>
                      <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z" />
                      <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z" />
                      <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z" />
                    </svg>
                    <span>Follow on Instagram</span>
                  </a>
                </div>
                {/* <!-- //Single Social Icon Block --> */}
                {/* <!-- Single Social Icon Block --> */}
                <div className="social-icon facebook">
                  <a href="">
                    <svg
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>facebook2</title>
                      <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z" />
                    </svg>
                    <span>Follow on Facebook</span>
                  </a>
                </div>
                {/* <!-- //Single Social Icon Block --> */}
              </div>
              {/* <!-- //Social Buttons --> */}
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
