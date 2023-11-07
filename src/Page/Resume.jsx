import React from 'react';

const Resume = () => {
 return (
  <div className='w-[80%] mx-auto'>
   <h1 className='text-start text-blue-400 text-3xl pl-28 py-5'>Education</h1>
<div className='grid lg:grid-cols-2 grid-cols-1'>
<div className=' text-white mt-6 shadow-emerald-200 shadow-md w-96 mx-auto  '>
   
   <div className=' card bg-slate-950' >
    <div className=' '>
      <div className='text-start'>
       <p className='text-slate-400'>2015-2019</p>
      <h1 className='text-xl'>BS in Geography & Environment</h1>
      <p className='text-slate-400'>University of Dhaka</p>
      </div>
  
    </div>
  </div>
  
     </div>
    <div className=' text-white mt-6 shadow-emerald-200 shadow-md w-96 mx-auto  '>
     
   <div className=' card bg-slate-950' >
  
    <div className=' '>
      <div className='text-start'>
       <p className='text-slate-400'>2020-2021</p>
      <h1 className='text-xl'>MS in Geography & Environment</h1>
      <p className='text-slate-400'>University of Dhaka</p>
      </div>
  
    </div>
  </div>
  
     </div>

</div>
     <div className='lg:flex justify-center my-5 py-8'>

      {/* progress */}
      <div className='m-10 space-y-5'>
       <h1 className='text-start text-blue-400 text-xl'>Working Skills</h1>
      <div>
      <div className='flex justify-between'>
      <label className='text-white text-xl font-medium'>Web Design</label>
      <label className='text-white text-xl font-medium'>80%</label>
      </div>
      <progress className="progress progress-info bg-white w-96" value={80} max="100"></progress>
      </div>
      <div>
      <div className='flex justify-between'>
      <label className='text-white text-xl font-medium'>React JS</label>
      <label className='text-white text-xl font-medium'>50%</label>
      </div>
      <progress className="progress progress-info bg-white w-96" value={50} max="100"></progress>
      </div>
      <div>
      <div className='flex justify-between'>
      <label className='text-white text-xl font-medium'>WordPress Theme customization with Elementor</label>
      <label className='text-white text-xl font-medium'>60%</label>
      </div>
      <progress className="progress progress-info bg-white w-96" value={60} max="100"></progress>
      </div>
      

      {/* button */}
     <div  className='my-6 max-w-xl space-x-3 space-y-3 text-justify'>
     <h1 className='text-start text-blue-400 text-xl'>Knowledge</h1>

     <button className="btn  btn-outline btn-info">HTML 5</button>
     <button className="btn btn-outline btn-info">CSS 3</button>
     <button className="btn btn-outline btn-info">Bootstrap 5</button>
     <button className="btn btn-outline btn-info">Tailwind CSS</button>
     <button className="btn btn-outline btn-info">Javascript</button>
     <button className="btn btn-outline btn-info">React JS</button>
     <button className="btn btn-outline btn-info">Node Js</button>
     <button className="btn btn-outline btn-info">MongoDB </button>
     <button className="btn btn-outline btn-info">Firebase Authentication</button>
     <button className="btn btn-outline btn-info">Elementor</button>
     
     </div>
     </div>
</div>
  </div>
 );
};

export default Resume;