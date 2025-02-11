

import Typewriter from 'typewriter-effect';

import '../css/HomeHeroSection.css'
//metarial ui icons 
import SearchIcon from '@mui/icons-material/Search';
import HeroRIghtSection from '../images/OBJECTS.png'

// absolute Icons 
import HImageOne from '../images/Group (6).png'
import HImageTwo from  "../images/Group (7).png"
import HImageThree from "../images/Group (8).png"
import HImageFOur from "../images/Group (9).png"
import HImageFIve from  "../images/Group (11).png"

import HImageSeven from "../images/Group (13).png"



function HomeHeroSection() {
  return (
<>

<div className="  HomeHeroSection  h-screen w-full  flex flex-col md:flex-row justify-center items-center relative p-3 ">

<div className="HomeHeroSection_left flex flex-col justify-around  md:justify-center items-center text-center md:items-start md:text-start h-[50%] p-3 md:h-[70%] ">

<div className="HomeHeroSection_left_Top md:mb-10 ">
<h1 className="text-black text-2xl md:text-5xl font-bold">The <span className="text-cyan-900"> Smart</span></h1>
<h1 className="text-2xl md:text-5xl md:mt-2 font-bold text-cyan-900 ">  <Typewriter
  options={{
    strings: ["Choice For  Future"],
    autoStart: true,
    loop: true,
  }}
/></h1>
<h1 className="text-sm md:mt-2"> Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</h1>


</div>

<div className="HomeHeroSection_left_Bottom border-collapse rounded-lg p-1 bg-slate-200 flex flex-row justify-around items-center w-[90%]">


<div className="HomeHeroSection_left_Bottom_SearchAndTextField flex flex-row justify-around items-center w-[100%] inset-shadow-sm">
<SearchIcon/>
<input type="text" placeholder='Search for a location...' className='w-[70%] text-sm p-2 border-none outline-none' />
</div>
<div className="HomeHeroSection_left_Bottom_ButtonArea">

<button className='btn p-2 rounded-lg bg-blue-950 text-white btn-ghost border-none ' > Continue</button>
</div>





</div>



</div>




<div className="HomeHeroSection-Right p-5">

<img src={HeroRIghtSection} alt="HeroRIghtSection" data-aos="fade-left"/>

</div>



{/*-------------- icons ---------*/   }



<img src={HImageOne} alt="HImageOne"  className='absolute  hidden md:block md:top-0 md:right-15 md:h-12 lg:h-15 ' />

<img src={HImageTwo} alt="HImageTwo" className='hidden md:block md:absolute md:top-8 md:left-[40%] md:h-12 lg:h-15 md:animate-bounce' />
<img src={HImageThree} alt="HImageThree" className='hidden  absolute md:block md:bottom-5 md:right-5 md:h-18 lg:h-20 ' />
<img src={HImageFOur} alt="HImageFOur" className='hidden absolute md:block  md:top-9 md:left-8 md:h-8  ' />
<img src={HImageFIve} alt="HImageFIve" className='hidden  absolute md:block md:top-32 md:left-[50%] md:h-15' />

<img src={HImageSeven} alt="HImageSeven" className='hidden absolute md:block md:bottom-15 md:left-15 md:h-18  ' />

 




</div>






</>
  )
}

export default HomeHeroSection