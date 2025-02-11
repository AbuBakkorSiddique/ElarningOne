import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';





import joinImageOne from '../images/Group 339.png'
import joiinImageTwo from '../images/Group 338.png';
import joinImageThree from '../images/Group 337.png'








function JoinCourse() {
  return (
<>


<div className="JoinCourse_Mian p-2 flex flex-col md:flex-row md:p-3 gap-5 sm:p-6 justify-center items-center" >

{/*------- This is one div -----------*/}
<div className="JoinCourse_Mian_one  p-1 bg-slate-100 rounded-sm  sm:p-5 md:p-2 lg:p-5 md:rounded-2xl" data-aos="fade-right">

<div className='flex justify-center items-center pt-3'>
    <img src={joinImageOne} alt="joinImageOne" />
</div>
<div className='flex flex-row justify-between items-center'>
    <div><h1> UI/UX Design</h1></div>
    <div className='flex flex-row'> <StarOutlineIcon/>  <StarOutlineIcon/> <StarOutlineIcon/> <StarOutlineIcon/> <StarOutlineIcon/>   </div>
</div>
<div>
    <h1> UI/UX Design for Beginners</h1>
</div>
<div>
    <h1 className='text-orange-600 font-bold'> $98</h1>
</div>
<div className='flex flex-row justify-between'>

   <div className='flex flex-row text-sm'>
   <AccessTimeIcon/> <h1> 22hr 30min</h1> 
   </div>
   <div className='flex flex-row text-sm'>
    <VideoCameraFrontOutlinedIcon/><h1> 34 Courses</h1>
   </div>
   <div className='flex flex-row text-sm'>
<DownloadOutlinedIcon/><h1> 250 Sales</h1>

   </div>

</div>
<div className='flex justify-center items-center mt-1 pb-2 md:mt-2'>
<button className='btn bg-amber-600 text-white rounded-2xl'> Join Course</button>
</div>


</div>

{/*------- This is two  -----------*/}
<div className="JoinCourse_Mian_two p-1 bg-slate-100 rounded-sm sm:p-5 md:p-2 lg:p-5 md:rounded-2xl">


<div className='flex justify-center items-center pt-3'>
    <img src={joiinImageTwo} alt="joiinImageTwo" />
</div>
<div className='flex flex-row justify-between items-center'>
    <div><h1> UI/UX Design</h1></div>
    <div className='flex flex-row'> <StarOutlineIcon/>  <StarOutlineIcon/> <StarOutlineIcon/> <StarOutlineIcon/> <StarOutlineIcon/>   </div>
</div>
<div>
    <h1> UI/UX Design for Beginners</h1>
</div>
<div>
    <h1 className='text-orange-600 font-bold'> $98</h1>
</div>
<div className='flex flex-row justify-between'>

   <div className='flex flex-row text-sm'>
   <AccessTimeIcon/> <h1> 22hr 30min</h1> 
   </div>
   <div className='flex flex-row text-sm'>
    <VideoCameraFrontOutlinedIcon/><h1> 34 Courses</h1>
   </div>
   <div className='flex flex-row text-sm'>
<DownloadOutlinedIcon/><h1> 250 Sales</h1>

   </div>

</div>
<div className='flex justify-center items-center mt-1 pb-2 md:mt-2'>
<button className='btn bg-amber-600 text-white rounded-2xl'> Join Course</button>
</div>




</div>


{/*------- This is threee  -----------*/}
<div className="JoinCourse_Mian_threee  p-1 bg-slate-100 rounded-sm sm:p-5 md:p-2 lg:p-5 md:rounded-2xl" data-aos="fade-left">



<div className='flex justify-center items-center pt-3'>
    <img src={joinImageThree} alt="joinImageThree" />
</div>
<div className='flex flex-row justify-between items-center'>
    <div><h1> UI/UX Design</h1></div>
    <div className='flex flex-row'> <StarOutlineIcon/>  <StarOutlineIcon/> <StarOutlineIcon/> <StarOutlineIcon/> <StarOutlineIcon/>   </div>
</div>
<div>
    <h1> UI/UX Design for Beginners</h1>
</div>
<div>
    <h1 className='text-orange-600 font-bold'> $98</h1>
</div>
<div className='flex flex-row justify-between'>

   <div className='flex flex-row text-sm'>
   <AccessTimeIcon/> <h1> 22hr 30min</h1> 
   </div>
   <div className='flex flex-row text-sm'>
    <VideoCameraFrontOutlinedIcon/><h1> 34 Courses</h1>
   </div>
   <div className='flex flex-row text-sm'>
<DownloadOutlinedIcon/><h1> 250 Sales</h1>

   </div>

</div>
<div className='flex justify-center items-center mt-1 pb-2 md:mt-2'>
<button className='btn bg-amber-600 text-white rounded-2xl'> Join Course</button>
</div>




</div>







</div>




</>
  )
}

export default JoinCourse