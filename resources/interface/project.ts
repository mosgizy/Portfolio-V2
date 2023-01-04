import { StaticImageData } from 'next/image';

export default interface api{
    projects: ProjectsI[];
    about: AboutI;
    skills: SkillsI;
    socialMedia: SocialMediaLinksI;
    api_key: ApiKeyI;
}

export interface ProjectsI{
    id: number;
    img: StaticImageData;
    title: string;
    description: string;
    category: string;
    source: string;
    demo: string;
}

export interface AboutI{
    image: string;
    developer: string;
    info: string;
}

export interface SkillsI {
    main: Object;
    others: [];
}

export interface SocialMediaLinksI{
    [index: string]: socialsI;

}

export interface socialsI{
    link: string;
    icon: string;
}

export interface ApiKeyI {
    [index: string] : string;
}