import { ProjectsI, ApiKeyI } from "./project";
import AboutI,{ SkillsI,SocialMediaLinksI } from "./sideBar";

export default interface apiI{
    projects: ProjectsI[];
    about: AboutI;
    api_key: ApiKeyI;
    loader: boolean;
}