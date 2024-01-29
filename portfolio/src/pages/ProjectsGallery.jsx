import Project from '../components/Project';
import projects from '../data/projects.json';

// This is the function that renders the project gallery, it uses map to go through each object 
// in the array from projects.json and uses the function from Project,jsx to render these onto the Projects Gallery page
function ProjectsGallery() {
    return <div className="pageBorder container-lg text-center">
        <h2 className="underline pb-3 mb-3 mt-3">My Projects</h2>
        <div className="row mt-5 mb-5 text-center">
            {projects.map((project) => {
                console.log(project, "yoooooooooooo")
                return <Project key={project.id} id={project.id} title={project.title} description={project.description} skills={project.skills} image={project.image} site={project.site} repo={project.repo} />;
            })}
        </div>
    </div>
}

export default ProjectsGallery;