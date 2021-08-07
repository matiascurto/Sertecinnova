import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation <img src="/images/menu.svg" alt="" className="menu-svg"/>
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation <img src="/images/cruz.svg" alt="" className="menu-svg"/>
          </a>
               
               <img className="logo-header" src="/images/logo.png" alt="" />
               {/* <div className="title-logo"><a href="/" style={{ color: ' white	' }}>SERTEC INNOVA</a></div> */}

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">Welcome to Sertec Innova.</h1>
                  <h3>I am Matias Curto a web developer. I am CEO of Sertec Innova, below I comment what languages I use and my jobs.</h3>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
