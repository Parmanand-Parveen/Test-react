import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./Slices/Imageslices";


const store = configureStore({
    reducer:{
        imageList:imagesSlice
    },
})


export default store