import React from "react";
import reactDOM from "react-dom";
import Navbar from "./components/navbar";
import LandingPageVideo from "./components/LandingPageVideo";
import AboutUs from "./components/infoPic";
import RAboutUs from "./components/picInfo";
import Facts from "./components/facts";
import Card from "./components/card";
import Contact from "./components/fullContact";
import Footer from "./components/footer";
reactDOM.render(
  <div>
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
      <h1> Projects </h1>
      <div className="container">
        <div className="cards">
          <Card name="Extraordinary Basement"       price="$29,500"       desc="Many Of Us dream to one day have our own Man Cave, but now with Hawk Builders you can build your dream for Cheap."         img="https://loveincorporated.blob.core.windows.net/contentimages/gallery/346942b0-204f-4ed1-9094-b87e54587913-man-cave-golf-simulator.jpg" />
          <Card name="Modern 'See'"                 price="$4,999,437"    desc="Jump into a pool whenever you want look out whenever you want go to the ocean whever you want."                            img="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
          <Card name="Neptune's Bathroom"           price="$5,500"        desc="Jump into Neptune's washroom for less than $6,000!"                                                                        img="https://cdn.trendir.com/wp-content/uploads/old/archives/2016/04/10/stunning-bathroom-view-mexican-tile-2.jpg" />
          <Card name="Old Town Road"                price="$599,999"      desc="Have you heard of Lil Nas X? if so MOVE here this is the best cottage for old people"                                      img="https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg" />
          <Card name="Cinahome"                     price="$23,500"       desc="Cineplex in my house? YES PLEASE! Watch all the latest movies in your house with no limitations."                          img="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilXZ2PCgKcME/v0/-1x-1.jpg" />
          <Card name="Modern White Chocolate"       price="$999,250"      desc="This is a modern house with a eye catching design perfect for a family of 10 that wants to live in the mountains"          img="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg" />
          <Card name="Acre View"                    price="$1,999,437"    desc="Let your kids and dogs run into YOUR fields for hours on the perfectly perserved grass."                                   img="https://www.mymove.com/wp-content/uploads/2018/05/Craftsman-house_@mikehutch40_Twenty20.jpg" />
          <Card name="Moutain King"                 price="$850,000"      desc="Have your own kingdom ontop of your own moutain with a priceless view."                                                    img="https://modern-villas.com/wp-content/uploads/2017/10/Flying-House-Modern-Villa-Design-3.jpg" />
          <Card name="Affordable Neighbors"         price="$350,500"      desc="Dont have much? Wanna live like a million air? Hop into one of these shared cubicals"                                      img="https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2019/05/02132610/HOUSE_CANYAMEL_CABALLEROCOLON_05.jpg" />
        </div>
      </div>
    </div>
    

    <Contact />

    <Footer />
  

  </div>,
  document.getElementById("root")
);