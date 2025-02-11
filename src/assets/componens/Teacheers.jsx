

import TeacherOne from  "../images/Group 337 (1).png"
import Teachertwo from "../images/Group 338 (1).png"
import TeacherThree from  "../images/Group 339 (1).png"
import SocialMediaIcons from "../images/Group 353.png"




function Teacheers() {
  return (
<>

<div className="Teacheers_Main h-[220vh] w-full md:h-[80vh]  p-4 flex flex-col md:flex-row justify-between items-center gap-3">

{/*------ Div One ------------*/}
<div className="bg-slate-200 rounded-2xl p-3" data-aos="fade-right">

<div className="flex justify-center items-center">
    <img src={TeacherOne} alt="TeacherOne" />
</div>
<div className="mt-1">
    <h1 className="text-lg font-bold"> Matthew E. McNatt</h1>
    <h1 className="text-sm"> Professor @George Brown College</h1>
</div>
<div className="text-sm mt-2">
    <h1> Ut enim ad minim veniam, quis nost exercitation</h1>
    <h1> ullamco laboris nisi ut allquip ex commodo.</h1>
</div>
<div className="flex flex-row justify-between items-center">

    <div>
        <h1 className="text-orange-600 font-bold"> Engineering physics</h1>
    </div>
    <div>
       <img src={SocialMediaIcons} alt="SocialMediaIcons" />
    </div>
</div>


</div>
{/*------ Div Two  ------------*/}
<div className="bg-slate-200 rounded-2xl p-3" >

<div className="flex justify-center items-center">
    <img src={Teachertwo} alt="Teachertwo" />
</div>
<div className="mt-1">
    <h1 className="text-lg font-bold"> Tracy D. Wright</h1>
    <h1 className="text-sm"> Professor @George Brown College</h1>
</div>
<div className="text-sm mt-2">
    <h1> Ut enim ad minim veniam, quis nost exercitation</h1>
    <h1> ullamco laboris nisi ut allquip ex commodo.</h1>
</div>
<div className="flex flex-row justify-between items-center">

    <div>
        <h1 className="text-orange-600 font-bold"> Engineering physics</h1>
    </div>
    <div>
       <img src={SocialMediaIcons} alt="SocialMediaIcons" />
    </div>
</div>


</div>
{/*------ Div THree ------------*/}
<div className="bg-slate-200 rounded-2xl p-3" data-aos="fade-left">

<div className="flex justify-center items-center">
    <img src={TeacherThree} alt="TeacherThree" />
</div>
<div className="mt-1">
    <h1 className="text-lg font-bold"> Cynthia A. Nelson</h1>
    <h1 className="text-sm"> Professor @George Brown College</h1>
</div>
<div className="text-sm mt-2">
    <h1> Ut enim ad minim veniam, quis nost exercitation</h1>
    <h1> ullamco laboris nisi ut allquip ex commodo.</h1>
</div>
<div className="flex flex-row justify-between items-center">

    <div>
        <h1 className="text-orange-600 font-bold"> Engineering physics</h1>
    </div>
    <div>
       <img src={SocialMediaIcons} alt="SocialMediaIcons" />
    </div>
</div>


</div>








</div>










</>
  )
}

export default Teacheers