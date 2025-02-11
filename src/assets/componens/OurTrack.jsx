
import '../css/OurTrack.css'
import ourTrackOne from '../images/casual-life-3d-idea-lamp 1.png';
import ourTrackTwo from "../images/Group (16).png"


function OurTrack() {
  return (
<>



<div className="OurTrack h-[30vh] w-full  flex flex-col sm:flex-row  justify-center sm:justify-between sm:p-3 items-center">


<div>
<img src={ourTrackOne} alt="ourTrackOne" className='hidden sm:block' />
</div>
<div className='flex flex-col text-center' data-aos="fade-up">

<h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'> Our Tracks</h1>
<h1 className='text-sm'> Lorem Ipsum is simply dummy text of the printing.</h1>

</div>
<div>
    <img src={ourTrackTwo} alt="ourTrackTwo"  className='hidden sm:block'/>
</div>





</div>





</>
  )
}

export default OurTrack