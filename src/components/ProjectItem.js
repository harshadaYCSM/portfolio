import { projects } from '../assets/info';


const ProjectItem = ({project}) => {

    return (
        <div className="project" >
          <h3 className="project-title">
            {project} ({projects[project].duration})
          </h3>
          <div className="project-description">
            <p>{projects[project].description}</p>
          </div>
          <div className="project-tags">
            {projects[project].tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
        </div>)
}
export default ProjectItem;
