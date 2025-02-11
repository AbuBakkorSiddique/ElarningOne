import TrackOne from "../images/Group (17).png"
import TrackTwo from "../images/casual-life-3d-orange-planet-with-disk 1.png" 


function OurTrackTwo() {
  return (
<>

<div className="OurTrackTwo_Main flex justify-center items-center h-[30vh] w-full text-center p-3 md:justify-between md:p-5">

<div className="hidden md:block">
 <img src={TrackOne} alt="TrackOne" />
</div>
<div data-aos="fade-up">
    <h1 className="text-2xl font-bold md:text-4xl"> Our Tracks</h1>
    <h1 className="text-sm"> Lorem Ipsum is simply dummy text of the printing.</h1>
</div>
<div className="hidden md:block">
<img src={TrackTwo} alt="TrackTwo" />
</div>



</div>



</>
  )
}

export default OurTrackTwo