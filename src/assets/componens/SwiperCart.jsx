import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


import SwiperPersonOne from '../images/Ellipse 34 (1).png'
import SwiperPersonTwo from '../images/Ellipse 34 (2).png'
import SwiperPersonThree from '../images/Ellipse 34 (3).png'





function SwiperCart() {
  return (
<>



<div >



<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
<SwiperSlide>


<div className='p-9 flex flex-col justify-center items-center sm:flex-row sm:gap-3'>


<div className="SwiperCart_Main h-[50vh] w-full p-5 flex flex-col justify-center items-start gap-5 bg-slate-200 rounded-xl  ">

<div className='text-center'>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonOne} alt="SwiperPersonOne" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>

{/*------------ Review  2 -------------*/}
<div className="SwiperCart_Main h-[50vh] w-full p-5  flex-col justify-center items-center gap-5 bg-slate-200 rounded-xl hidden sm:flex ">

<div className='text-center'>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonTwo} alt="SwiperPersonTwo" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>

{/*------------ Review  3 -------------*/}

<div className="SwiperCart_Main h-[50vh] w-full p-5 flex-col justify-center items-start gap-5 bg-slate-200 rounded-xl hidden md:flex ">

<div className='text-center flex justify-center items-center '>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonThree} alt="SwiperPersonThree" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>



</div>



</SwiperSlide>

<SwiperSlide>


<div className='p-9 flex flex-col justify-center items-center sm:flex-row sm:gap-3'>


<div className="SwiperCart_Main h-[50vh] w-full p-5 flex flex-col justify-center items-start gap-5 bg-slate-200 rounded-xl  ">

<div className='text-center'>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonOne} alt="SwiperPersonOne" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>

{/*------------ Review  2 -------------*/}
<div className="SwiperCart_Main h-[50vh] w-full p-5  flex-col justify-center items-center gap-5 bg-slate-200 rounded-xl hidden sm:flex ">

<div className='text-center'>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonOne} alt="SwiperPersonOne" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>

{/*------------ Review  3 -------------*/}

<div className="SwiperCart_Main h-[50vh] w-full p-5 flex-col justify-center items-start gap-5 bg-slate-200 rounded-xl hidden md:flex ">

<div className='text-center flex justify-center items-center '>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonTwo} alt="SwiperPersonTwo" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>



</div>



</SwiperSlide>



<SwiperSlide>

<div className='p-9 flex flex-col justify-center items-center sm:flex-row sm:gap-3'>


<div className="SwiperCart_Main h-[50vh] w-full p-5 flex flex-col justify-center items-start gap-5 bg-slate-200 rounded-xl  ">

<div className='text-center'>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonOne} alt="SwiperPersonOne" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>

{/*------------ Review  2 -------------*/}
<div className="SwiperCart_Main h-[50vh] w-full p-5  flex-col justify-center items-center gap-5 bg-slate-200 rounded-xl hidden sm:flex ">

<div className='text-center'>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonTwo} alt="SwiperPersonTwo" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>

{/*------------ Review  3 -------------*/}

<div className="SwiperCart_Main h-[50vh] w-full p-5 flex-col justify-center items-start gap-5 bg-slate-200 rounded-xl hidden md:flex ">

<div className='text-center flex justify-center items-center '>
<h1 className='text-sm'> “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself” </h1>
</div>
<div className='flex flex-row gap-5 justify-center items-center w-full'>
    <div className='flex justify-center items-center'>
        <img src={SwiperPersonThree} alt="SwiperPersonThree" />
    </div>
    <div>
        <h1 className='text-xl font-bold'> Finlay Kirk</h1>
        <h1 className='text-sm'> Web Developper</h1>
    </div>
</div>



</div>



</div>



</SwiperSlide>











</Swiper>





</div>






</>
  )
}

export default SwiperCart