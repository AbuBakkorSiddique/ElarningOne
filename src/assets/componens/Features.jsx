

// feature image 
import FeatureImageOne  from  "../images/online-test 1.png"
import FeatureImageeTwo from  "../images/exam 1.png"
import FeatureImageTHree from  "../images/certification 1.png"

function Features() {
  return (
<>

<div className=" Features  h-[90vh] lg:h-[60vh] w-full  flex flex-col justify-center items-center p-4 gap-3 sm:p-5 md:p-7 lg:flex-row lg:p-3 lg:gap-5 " data-aos="fade-up">




<div className="Features_Sub flex flex-col gap-3 rounded-2xl sm:p-5 bg-cyan-800 md:p-5 justify-center items-center h-[100%] w-[100%] lg:h-[80%] lg:w-[90%] lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-5  lg:p-5 lg:rounded-2xl">



<div className="Features_one flex flex-col lg:flex-row justify-center lg:gap-5 items-center text-center lg:text-start ">

<div className="Features_one_left">
  <img src={FeatureImageOne} alt="FeatureImageOne" className="lg:w-30 lg:h-20 lg:bg-slate-100 lg:p-3 lg:rounded-lg" />

</div>
<div className="Features_one_right">
  <h1 className="text-lg font-bold lg:text-xl text-white"> Learn The Latest Skills</h1>
  <h1 className="text-sm text-slate-300 "> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</h1>

</div>

</div>





<div className="Features_two flex flex-col lg:flex-row justify-center items-center text-center lg:gap-5 lg:text-start ">

<div className="Features_two_left">
  <img src={FeatureImageeTwo} alt="FeatureImageeTwo" className="lg:w-30 lg:h-20 lg:bg-slate-100 lg:p-3 lg:rounded-lg" />

</div>
<div className="Features_two_right">
  <h1 className="text-lg font-bold lg:text-xl text-white "> Get Ready For a Career</h1>
  <h1 className="text-sm  text-slate-300"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</h1>

</div>

</div>



<div className="Features_three flex flex-col lg:flex-row justify-center items-center text-center lg:text-start lg:gap-5">

    <div className="Features_three_left">
    <img src={FeatureImageTHree} alt="FeatureImageTHree" className="lg:w-30 lg:h-20 lg:bg-slate-100 lg:p-3 lg:rounded-lg" />

    </div>
    <div className="Features_three_right">
      <h1 className="text-lg font-bold lg:text-xl text-white"> Earn a Certificate</h1>
       <h1 className="text-sm text-slate-300"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</h1>
    </div>

</div>




</div>








</div>






</>
  )
}

export default Features