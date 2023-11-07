
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
 const { id, name, catg,  demoLink, photoUrl } = project || []
 // const [projectLink, setProjectLink] = useState('') || []

 const handleDemo = () => {
  window.open(demoLink, '_blank'); // Open the demo link in a new tab/window
};


 return (
  <div>
   <div>
    <div className="card h-96  border p-4  rounded-lg space-y-7">
     <div>
      <img className='w-full h-48' src={photoUrl} alt="" />
     </div>
     <div className='text-start '>
      <h3 className='text-xl text-white font-medium'>{name}</h3>
     
     </div>

     {/* <button onClick={handleDemo} className="bg-slate-700 text-white text-xl font-medium md:px-28  py-1 rounded-xl">
          Demo
        </button> */}
      <div className='flex  justify-between '>
      <button onClick={handleDemo}  className="btn bg-slate-700 text-white font-medium text-lg rounded-xl">Demo</button>
     
      <div>
      <div className="badge text-black font-medium text-md badge-accent p-4">{catg}</div>

      </div>

      </div>
        
    </div>
   </div>

  </div>
 );
};

export default ProjectCard;