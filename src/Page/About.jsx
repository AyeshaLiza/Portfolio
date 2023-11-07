import mobilephone from '../assets/mobilephone.png'
import email from '../assets/email.png'

import location from '../assets/location.png'
import calender from '../assets/calendar.png'
import WhatIDo from '../Component/WhatIDo';
const About = () => {
 return (
  <>

  <div className='min-h-screen p-8 w-[80%] mx-auto text-white'>
 

  <div className='space-y-7'>
  <div className='space-y-4'>
  <h1 className='text-3xl text-blue-300 font-medium'>About Myself</h1>
   <p className='text-xl text-justify   max-w-5xl mx-auto'>I am a web designer & Front End Web developer(React JS) from Dhaka, Bangladesh. I convert figma to HTML, PSD to HTML using Bootstrap5 & tailwind CSS. I design creative & alluring Landing Page. Also I create dynamic & interactive website through React JS. I love to create very intuitive & visualy appealing website. My aim is to transforming ideas into creative & user-friendly design experiences. </p>
  </div>

   <div className='card mt-6  shadow-emerald-200 shadow-md w-11/12 mx-auto  '>
    <h1 className='text-2xl text-blue-300'>Personal Info</h1>

<div className='grid grid-cols-2 ' >
{/* Phone div */}
  <div className='card-body'>
  <div className='flex '>
     <div className='w-11'>
      <img className='w-8 mx-auto my-2' src={mobilephone} alt="" />
     </div>
    <div>
    <h1>Phone</h1>
    <p>+8801628615264</p>
    </div>
    </div>
  </div>

{/* email div */}
  <div className='card-body'>
  <div className='flex '>
     <div className='w-11'>
      <img className='w-8 mx-auto my-2' src={email} alt="" />
     </div>
    <div>
    <h1>Email</h1>
    <p>ayeshaliza269@gmail.com</p>
    </div>
    </div>
  </div>

{/* location div */}
  <div className='card-body'>
  <div className='flex '>
     <div className='w-11'>
      <img className='w-8 mx-auto my-2' src={location} alt="" />
     </div>
    <div>
    <h1>Location</h1>
    <p>Science Lab, Dhaka</p>
    </div>
    </div>
  </div>

{/* location div */}
  <div className='card-body'>
  <div className='flex '>
     <div className='w-11'>
      <img className='w-8 mx-auto my-2' src={calender} alt="" />
     </div>
    <div>
    <h1>Birth Date</h1>
    <p>18th November, 1996</p>
    </div>
    </div>
  </div>
</div>

   </div>
 

 <div>
 <WhatIDo></WhatIDo>
 </div> 
 </div>
  </div>
  

  </>
 );
};

export default About;