import { StaticImageData } from 'next/image';
export interface ProjectsI{
    id: number;
    img: StaticImageData;
    title: string;
    description: string;
    category: string;
    source: string;
    demo: string;
}
export interface ApiKeyI {
    [index: string] : string;
}