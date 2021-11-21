import React from "react";
import { connect } from "react-redux";

const ProjectDetails = ({ project }) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>
            Posted by {project.authorFirstName} {project.authorLastName}
          </div>
          <div>{project.date}</div>
        </div>
      </div>
    </div>
  );
};

const mapStatesToProps = (state, ownProps) => {
  const projects = state.project.projects;
  const project = projects.filter(
    (project) => project._id === ownProps.match.params.id
  );
  return {
    project: project[0],
  };
};
export default connect(mapStatesToProps)(ProjectDetails);
