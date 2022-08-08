export default function ProjectComp(props) {
  return (
    <div className="project-container" id="projects">
      <h1 className="grid-item-1">{props.project.heading}</h1>
      <img className="grid-item-2" src={props.project.image}></img>
      <div className="grid-item-3">
        <p>{props.project.description}</p>
        <div className="link-container">
          <a
            className="links"
            href={props.project.link}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
          <span className="vertical-line"></span>
          <a
            href={props.project.gitlink}
            className="links"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
