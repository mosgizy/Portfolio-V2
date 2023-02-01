import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import apiI from "../../resources/interface/apiInterface";
import AboutI from "../../resources/interface/sideBar";
import { RootState } from "../store";
import { URL } from "../../resources/constants/url";

export const fetchSidebar = createAsyncThunk('sidebar/fetchSidebar',
    async () => {
        try {
            const response = await fetch(URL + 'about')
            return response.json();
        } catch (error) { 
            console.error(error);
            return {}
        }
    }
)

const initialState = {
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
    api_key: {},
    loader:true,
} as apiI

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        home: (state,action:PayloadAction<{info:string[],intro:string[]}>) => {
            state.about.profile.info = action.payload.info
            state.about.profile.intro = action.payload.intro
        },
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loader = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSidebar.fulfilled, (state, action:PayloadAction<AboutI>) => {
            state.about = action.payload
        })
    },
})

export const { home,setLoader} = portfolioSlice.actions

export const selectPortfolio = (state: RootState) => state.portfolio

export default portfolioSlice.reducer