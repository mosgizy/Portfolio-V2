import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import apiI from "../../resources/interface/apiInterface";
import { ProjectsI } from "../../resources/interface/project";
import AboutI from "../../resources/interface/sideBar";

const initialState:apiI = {
    projects: [],
    about: {
        profile: {
            image: "",
            developer: "",
            info: [],
            intro: [],
            name: "",
            country: "",
            city: "",
        },
        skills: {
            main: {},
            others: [],
        },
        socialMedia: {}
    },
    api_key:{}
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        home: (state,action:PayloadAction<{info:string[],intro:string[]}>) => {
            state.about.profile.info = action.payload.info
            state.about.profile.intro = action.payload.intro
        },
        projects: (state, action: PayloadAction<ProjectsI[]>) => {
            state.projects = action.payload
        },
        sidebar: (state,action:PayloadAction<AboutI>) => {
            state.about = action.payload
            // console.log(action.payload)
        }
    }
})

export const {home,projects,sidebar} = portfolioSlice.actions

export default portfolioSlice.reducer