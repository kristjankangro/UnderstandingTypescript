import {ProjectInput} from "./components/ProjectInput.ts";
import {ProjectList} from "./components/ProjectList.ts";

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
console.log(projectInput, activeProjectList, finishedProjectList);

