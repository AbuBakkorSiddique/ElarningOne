
import SImageOne from "../images/Ellipse 41.png"
import SImageTwo from "../images/Ellipse 43.png";
import SImageThree from "../images/casual-life-3d-idea-lamp 2.png"




import '../css/SubsCribe.css'

function SubsCribe() {
  return (
<>

<div className="SubsCribe_Main h-[50vh]  w-full  flex justify-center items-center" data-aos="fade-up">

<div className="SubsCribe_Sub  h-[100%] sm:h-[80%] w-[100%] sm:w-[90%] sm:rounded-lg bg-emerald-600 flex flex-col justify-center items-center text-center gap-3 relative">


    <div>
        <h1 className="text-lg font-bold text-white md:text-xl"> Subscribe to our newsletter</h1>
    </div>
    <div className='pl-5 pr-5'>
        <h1 className="text-sm text-white"> Lorem Ipsum is simply dummy text of the printing.</h1>
    </div>
    <div className="flex flex-row border p-2 w-[90%] sm:w-[70%] md:w-[60%] inset-shadow-2xl  rounded-xl justify-between items-center bg-white">
        <input type="text" placeholder="Email Address"  className="outline-none border-none"/>
        <button className="btn bg-orange-500 text-white rounded-2xl border-none"> Send</button>
    </div>

 <img src={SImageOne} alt="SImageOne" className="hidden  md:block md:absolute md:top-0 md:left-0 md:h-20  "  />
 
 <img src={SImageOne} alt="SImageOne" className="hidden  md:block md:absolute md:top-0 md:left-[-30px] md:h-20  "  />
 <img src={SImageOne} alt="SImageOne" className="hidden  md:block md:absolute md:top-0 md:left-[-30px] md:h-20  "  />
 <img src={SImageTwo} alt="SImageOne" className="hidden  md:block md:absolute md:top-0 md:right-0 md:h-30  "  />
 <img src={SImageTwo} alt="SImageOne" className="hidden  md:block md:absolute md:top-0 md:right-[-20px] md:h-30  "  />
 <img src={SImageThree} alt="SImageOne" className="hidden  md:block md:absolute md:bottom-0 md:right-0 md:h-30  "  />

</div>


</div>


</>
  )
}

export default SubsCribe