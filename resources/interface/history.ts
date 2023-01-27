export interface HistoryI{
    history: recommendationI[];
}

export interface recommendationI {
    id: number;
    name: string;
    title: string;
    duration: string;
    intro: string;
    recommendation: string;
}