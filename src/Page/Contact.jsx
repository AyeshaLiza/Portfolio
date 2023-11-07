import mobilephone from '../assets/mobilephone.png'
import email from '../assets/email.png'

import location from '../assets/location.png'




const Contact = () => {
 return (
  <div className='space-y-5 p-5'>
   <h1 className='text-2xl text-blue-300'>Contact me </h1>

   <div className=' text-white mt-6 shadow-emerald-200 shadow-md w-1/2 mx-auto  '>
<div className=' card' >
{/* Phone div */}
  <div className='flex justify-center'>
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
</div>
   </div>


   <div className=' text-white mt-6 shadow-emerald-200 shadow-md w-1/2 mx-auto  '>
<div className=' card' >
{/* Phone div */}
  <div className='flex justify-center'>
  <div className='flex '>
     <div className='w-11'>
      <img className='w-8 mx-auto my-2' src={email} alt="" />
     </div>
    <div>
    <h1>Email</h1>
    <p>ayeshaliza269@gamil.com</p>
    </div>
    </div>
  </div>


</div>
   </div>
   <div className=' text-white mt-6 shadow-emerald-200 shadow-md w-1/2 mx-auto  '>
<div className=' card' >
{/* Phone div */}
  <div className='flex justify-center'>
  <div className='flex '>
     <div className='w-11'>
      <img className='w-8 mx-auto my-2' src={location} alt="" />
     </div>
    <div>
    <h1>Location </h1>
    <p>Science Lab</p>
    </div>
    </div>
  </div>


</div>
   </div>

  </div>
 );
};

export default Contact;