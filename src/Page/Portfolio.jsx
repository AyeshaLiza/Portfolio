import { useEffect, useState } from "react";
import ProjectCard from "../Component/ProjectCard";



const Portfolio = () => {
 const [projects, setProjects] = useState([]);

 useEffect(() =>{
  fetch('/JsonData.json')
  .then(res => res.json())
  .then(data => setProjects(data))
 } ,[])
 return (
<div className="p-8 mx-5">
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 ">
{
 projects?.map((project) => <ProjectCard key={project.id} project={project}></ProjectCard>)
}

    
  </div>
 

</div>
 );
};

export default Portfolio;