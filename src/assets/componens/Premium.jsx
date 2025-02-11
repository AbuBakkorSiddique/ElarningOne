import PremiumOne from '../images/OBJECTS (1).png'
import PremiumTwo from '../images/hearts 1.png' 
import PremiumThree from  "../images/jigsaw 1.png";
// import PremiumFOur from " "
// import PremiumFive from " "
// import PremiumSix from " "
// import PremiumSeven from " "
// import PremiumEIght from " "
// import PremiumNine from " "


function Premium() {
  return (
<>

<div className="Premium_Main h-[160vh] w-full bg-amber-100 p-5 flex flex-col justify-around sm:flex-row sm:h-[80vh] sm:gap-8">

<div className="Premium_Main_left flex justify-center items-center " data-aos="fade-right">

<img src={PremiumOne} alt="PremiumOne" className='sm:h-[100%] sm:w-[100%]' />

</div>





<div className="Premium_Main_right flex flex-col gap-5 justify-center items-start sm:items-start" data-aos="fade-left">

<div className='mb-5'>
<h1 className='text-3xl font-bold'> Premium <span className='text-orange-600'> Learning</span></h1>
<h1 className='text-3xl font-bold'> Experience</h1>
</div>

<div  className='flex flex-row gap-3 '>

<div className='flex justify-center items-center bg-green-900 p-3 rounded-xl'>
    <img src={PremiumTwo} alt="PremiumTwo"  />
</div>
<div>
    <h1 className='text-xl font-bold'> Easily Accessible</h1>
    <h1 className='text-sm'> Learning Will fell Very Comfortable With Courslab.</h1>
</div>

</div>

<div  className='flex flex-row gap-3  '>

<div className='flex justify-center items-center bg-green-900 p-3 rounded-xl'>
    <img src={PremiumThree} alt="PremiumThree"  />
</div>
<div>
    <h1 className='text-xl font-bold'> Fun learning expe</h1>
    <h1 className='text-sm'> Learning Will fell Very Comfortable With Courslab.</h1>
</div>

</div>


</div>



</div>





</>
  )
}

export default Premium