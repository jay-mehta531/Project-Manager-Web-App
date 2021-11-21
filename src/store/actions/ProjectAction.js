import axios from "axios";

export const loadProjects = () => async (dispatch) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/api/project/",
  };
  try {
    const projects = await axios(options);
    dispatch({ type: "FETCH_PROJECT", projects: projects.data });
  } catch (err) {
    dispatch({ type: "FETCH_PROJECT_ERR", err });
  }
};

export const createProject = (project) => async (dispatch) => {
  const newProject = {
    ...project,
    authorFirstName: "Jay",
    authorLastName: "Mehta",
  };
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/project/create",
    data: newProject,
  };
  try {
    await axios(options);
    dispatch({ type: "CREATE_PROJECT", project: newProject });
  } catch (err) {
    dispatch({ type: "CREATE_PROJECT_ERR", err });
  }
};
