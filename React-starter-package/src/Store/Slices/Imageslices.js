import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  images: [],
  details: {},
  loading: false,
};

export const getImages = createAsyncThunk("/", async (page) => {
  try {
    const data = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`);
    return data.data;
  } catch (error) {
    console.log("Error while getting images", error);
  }
});

export const imageDetails = createAsyncThunk("/:id", async (id) => {
  try {
    const data = await axios.get(`https://picsum.photos/id/${id}/info`);

    return data.data;
  } catch (error) {
    console.log("Error while getting image details", error);
  }
});

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(getImages.rejected, (state) => {
        state.loading = false;
      })
      .addCase(imageDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(imageDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(imageDetails.rejected, (state) => {
        state.loading = false;
      })
    
  },
});

export default imagesSlice.reducer;
