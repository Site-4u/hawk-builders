import React, { Component } from "react";
import Link from 'next/link';
import Navbar from "../components/navbar";
import LandingPageVideo from "../components/LandingPageVideo";
import AboutUs from "../components/infoPic";
import RAboutUs from "../components/picInfo";
import Facts from "../components/facts";
import Card from "../components/card";
import Contact from "../components/fullContact";
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
          <title>Home - Hawk Builders</title>
          <link rel="icon" href="https://i.ibb.co/PN3RFY5/favicon.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charset="UTF-8" />
          <meta name="description" content="Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." />
          <meta name="keywords" content="Hawk, Builders, Hawk Builders, H, B, HB, House, Construction, Basement, Washroom, Kitchen, Renovation, Upgrade, Living, Home, Construction" />
          <meta name="author" content="Site 4 u" />
        </Head>
        <Navbar name="Hawk Builders"/>
        <LandingPageVideo url="vyIh46Xawyo" name="Hawk Builders" desc="Strive To Serve Your Dream" /> 
        <AboutUs  name="What is Hawk Builders"  desc="We have been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." image="https://i.ibb.co/nzdqgWr/download.png"  />
        <Facts message1="Your experience with us will be seamless" message2="We will make your Dream a Reality" message3="We serve you in numerous ways"/>
        
        <RAboutUs  name="How We Serve You"  desc="
            Contacting us, you can let us take care of all your stress, you can lean on us for all support. Our experienced team handle it all, starting from:
            Creating Rough sketch of your vision;
            Getting land surveys conducted;
            Developing geological drawings;
            Getting soil sampling;
            Developing Engineering drawings;
            3D sketch of the House;
            HVAC drawings;
            Truss Drawing;
            Obtaining all required permits from the concerned governmental agencies;
            And finally Construction to bring your vision to life.
        " image="https://i.ibb.co/qJQNTSH/pexels-burst-544965-1-1.jpg"  />


        <Facts message1="Your experience with us will be seamless" message2="We will make your Dream a Reality" message3="We serve you in numerous ways"/>
        
        
        <div id="Projects">
        <Fade triggerOnce keyframes={up} delay="0">
          <h1> Projects </h1>
        </Fade>
          <div className="container">
            <div className="cards">
              <Card id="1" name="Extraordinary Basement"       price="$29,500"       desc="Many Of Us dream to one day have our own Man Cave, but now with Hawk Builders you can build your dream for Cheap."         img="https://loveincorporated.blob.core.windows.net/contentimages/gallery/346942b0-204f-4ed1-9094-b87e54587913-man-cave-golf-simulator.jpg" />
              <Card id="2" name="Modern 'See'"                 price="$4,999,437"    desc="Jump into a pool whenever you want look out whenever you want go to the ocean whever you want."                            img="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
              <Card id="3" name="Neptune's Bathroom"           price="$5,500"        desc="Jump into Neptune's washroom for less than $6,000!"                                                                        img="https://cdn.trendir.com/wp-content/uploads/old/archives/2016/04/10/stunning-bathroom-view-mexican-tile-2.jpg" />
              <Card id="4" name="Old Town Road"                price="$599,999"      desc="Have you heard of Lil Nas X? if so MOVE here this is the best cottage for old people"                                      img="https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg" />
              <Card id="5" name="Cinahome"                     price="$23,500"       desc="Cineplex in my house? YES PLEASE! Watch all the latest movies in your house with no limitations."                          img="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilXZ2PCgKcME/v0/-1x-1.jpg" />
              <Card id="6" name="Modern White Chocolate"       price="$999,250"      desc="This is a modern house with a eye catching design perfect for a family of 10 that wants to live in the mountains"          img="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg" />
            </div>
          </div>

          <Link href="/projects"> 
            <a class="viewMoreProjects"> View More </a> 
          </Link>

        </div>
        

        <Contact />

        <Fade triggerOnce keyframes={up} delay="0">
          <Footer />
        </Fade>
        
      

      </div>
    )
  }
};
