const initState = {
  projects: [],
};

const projectReducre = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PROJECT":
      console.log("Fetched projects", action.projects);
      return { ...state, projects: action.projects };
    case "FETCH_PROJECT_ERR":
      console.log("Error while fetching projects", action.err);
      return state;
    case "CREATE_PROJECT":
      console.log("Ctrated project", action.project);
      return state;
    case "CREATE_PROJECT_ERR":
      console.log("Error while creating project", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducre;
