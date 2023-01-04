import { StaticImageData } from 'next/image';

export default interface About{
    profile: profileI;
    skills: SkillsI;
    socialMedia: SocialMediaLinksI;
}

export interface profileI{
    image: StaticImageData | string;
    developer: string;
    info: string[];
    intro:string[];
    name: string;
    country: string;
    city: string;
}

export interface SkillsI {
    main: {
        [s: string]: string;
    };
    others: string[];
}

export interface SocialMediaLinksI{
    [index: string]: socialsI;
}

export interface socialsI{
    link: string;
    icon: string;
}