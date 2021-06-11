import React, { Component } from "react";
import Link from 'next/link';
import BackBtn from "../components/back";
import Image from "../components/houseImage";
import Footer from "../components/footer";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';
import Head from 'next/head'




export default class Index extends Component{
  render(){
    return(
      <div>
        <Head>
          <title>Projects - Hawk Builders</title>
          <link rel="shortcut icon" href="https://i.ibb.co/PN3RFY5/favicon.png" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Take A look at our projects - Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." />
          <meta name="author" content="Site 4 u" />
        </Head>

        <BackBtn />


        <div class="container-project">


          {/* House Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Houses</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
              <Image id="2" link="https://i.ibb.co/d5FyZXR/Screen-Shot-2021-06-11-at-8-03-08-AM.png" />
            </div>
          </div>


          {/* Interior Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Interior</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://images.pexels.com/photos/5353880/pexels-photo-5353880.jpeg?cs=srgb&dl=pexels-curtis-adams-5353880.jpg&fm=jpg" />
              <Image id="2" link="https://images.pexels.com/photos/3315286/pexels-photo-3315286.jpeg?cs=srgb&dl=pexels-victoria-borodinova-3315286.jpg&fm=jpg" />
              <Image id="3" link="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?cs=srgb&dl=pexels-christa-grover-2121121.jpg&fm=jpg" />
              <Image id="4" link="https://images.pexels.com/photos/6587823/pexels-photo-6587823.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6587823.jpg&fm=jpg" />
              <Image id="5" link="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?cs=srgb&dl=pexels-christa-grover-2121121.jpg&fm=jpg" />
              <Image id="6" link="https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585750.jpg&fm=jpg" />
              <Image id="7" link="https://i.ibb.co/KWKQwK9/1.jpg" />
              <Image id="8" link="https://i.ibb.co/Df2Cwz4/2.jpg" />
              <Image id="9" link="https://i.ibb.co/sydfQxY/3.jpg" />
              <Image id="10" link="https://i.ibb.co/sjzbPYS/4.jpg" />
              <Image id="11" link="https://i.ibb.co/vZ2JWxt/5.jpg" />
            </div>
          </div>


          {/* Bedroom Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Bedroom</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://images.pexels.com/photos/6585612/pexels-photo-6585612.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585612.jpg&fm=jpg" />
              <Image id="2" link="https://images.pexels.com/photos/6489100/pexels-photo-6489100.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6489100.jpg&fm=jpg" />
              <Image id="3" link="https://images.pexels.com/photos/6587902/pexels-photo-6587902.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6587902.jpg&fm=jpg" />
            </div>
          </div>


          {/* Kitchen Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Kitchens</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?cs=srgb&dl=pexels-tamil-king-3214064.jpg&fm=jpg" />
              <Image id="2" link="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-terry-magallanes-2635038.jpg&fm=jpg" />
              <Image id="3" link="https://images.pexels.com/photos/6585767/pexels-photo-6585767.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585767.jpg&fm=jpg" />
            </div>
          </div>


        {/* Basement Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Basements</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://i.ibb.co/L0pZ227/bs.jpg" />
              <Image id="2" link="https://i.ibb.co/2dsPZzw/bs1.jpg" />
              <Image id="3" link="https://i.ibb.co/ZYk83ND/bs2.jpg" />
              <Image id="4" link="https://i.ibb.co/kQqcCyd/bs3.jpg" />
              <Image id="5" link="https://i.ibb.co/FV1bcLg/bs4.jpg" />
              <Image id="6" link="https://i.ibb.co/Hxx5gLv/bs5.jpg" />
            </div>
          </div>


          {/* Washroom Container */}
          <div class="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Washrooms</h1>
            </Fade>
            <div class="imgContainerProjects">
              <Image id="1" link="https://images.pexels.com/photos/6587852/pexels-photo-6587852.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6587852.jpg&fm=jpg" />
              <Image id="2" link="https://images.pexels.com/photos/5071176/pexels-photo-5071176.jpeg?cs=srgb&dl=pexels-curtis-adams-5071176.jpg&fm=jpg" />
              <Image id="3" link="https://i.ibb.co/rwd8wQc/1.jpg" />
              <Image id="4" link="https://i.ibb.co/rZ8Kn5Y/2.jpg" />
            </div>
          </div>





        </div>

        <Fade triggerOnce keyframes={up}>
          <Footer />
        </Fade>
      

      </div>
    )
  }
};
