import Project from "./Project";

const ProjectList= (projects) => {
  let selected = projects.projects.filter((project) => project.category === projects.selected);
  if (selected.length === 0) {
    selected = projects.projects;
  }

  return(
  <div className="project__list">
    {selected.map((project) => 
        <Project project={project}/>
    )}
  </div>
  
  )
}

export default ProjectList;