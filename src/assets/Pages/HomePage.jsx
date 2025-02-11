import AOS from "aos";
import "aos/dist/aos.css";


import NavigationBar from "../componens/NavigationBar";
import HomeHeroSection from "../componens/HomeHeroSection";
import Features from "../componens/Features";
import OurTrack from "../componens/OurTrack";
import JoinCourse from "../componens/JoinCourse";
import Premium from "../componens/Premium";
import WhatStuden from "../componens/WhatStuden";
import SwiperCart from "../componens/SwiperCart";
import OurTrackTwo from "../componens/OurTrackTwo";
import Teacheers from "../componens/Teacheers";
import SubsCribe from "../componens/SubsCribe";
import Fotter from "../componens/Fotter";
import { useEffect } from "react";


function HomePage() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);


  return (
<>

<div className="overflow-x-hidden" >
<NavigationBar/>
<HomeHeroSection/>
<Features/>
<OurTrack/>
<JoinCourse/>
<Premium/>
<WhatStuden/>
<SwiperCart/>
<OurTrackTwo/>
<Teacheers/>
<SubsCribe/>
<Fotter/>







</div>





</>
  )
}

export default HomePage