import React, { useEffect } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect, useDispatch } from "react-redux";
import { loadProjects } from "../../store/actions/ProjectAction";

const Dashboard = ({ projects }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProjects());
  }, []);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStatesToProps)(Dashboard);
