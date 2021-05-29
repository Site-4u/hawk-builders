import React, { useEffect } from "react";
import $ from 'jquery';
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';


// Input - "name"
function Navbar(props)
{
  useEffect(function(){
    window.onscroll = () => {
      const nav = document.querySelector('#navbar-container');
      if($(window).scrollTop() <= 50) nav.className = ''; else nav.className = 'scroll';
    };

    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 200);
      });
  });
  
  function navMenuToggle(){
    $("#1").toggleClass("toggle-div-btn-1");
    $("#2").toggleClass("toggle-div-btn-2");
    $("#3").toggleClass("toggle-div-btn-3");
    $("#nav-link-container").toggleClass("nav-link-move");
  }
  





  return(
    <nav id="navbar-container" class="">
        <ul id="navbar">
            <Fade triggerOnce keyframes={down} delay="5">
              <li className="push nav-brand"><a href="">{props.name}</a></li>
              <li className="push nav-brand nav-brand-mobile"><a href="">{props.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</a></li>
            </Fade>
            <div id="nav-link-container">
            <Fade triggerOnce keyframes={down} delay="20"><li><a className="nav-link" href="#about-us-page-container">About Us</a></li></Fade>
            <Fade triggerOnce keyframes={down} delay="50"><li><a className="nav-link" href="#Projects">Projects</a></li></Fade>
            <Fade triggerOnce keyframes={down} delay="80"><li><a className="nav-link" href="#contact-container">Contact</a></li></Fade>
              <div id="bg-nav-link-container"></div>
            </div>

            <button id="toggle-container-btn" onClick={navMenuToggle}>
              <div id="toggle-container">
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
              </div>
            </button>
        </ul>
    </nav>
  );
}


export default Navbar;