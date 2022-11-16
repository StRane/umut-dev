import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="lg:mx-28">
      <h2 className="pt-20 pb-10 md:pt-20">
        Projects
        <hr className="w-full h-[1px] border-green-mdark" />
      </h2>
      <ProjectItem />
    </div>
  );
}

export default Projects;
