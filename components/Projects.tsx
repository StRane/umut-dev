
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="lg:mx-28">
      <h2 className="pt-20 pb-10 md:pt-20">
        Projects
        <hr className="w-full h-[1px] border-green-mdark" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-y-20 pt-10">
        <ProjectItem />
      </div>
    </div>
  );
}

export default Projects;
