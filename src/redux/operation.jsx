import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://petlove.b.goit.study/api`;

export const getNews = createAsyncThunk('news', async (page, thunkAPI) => {
  try {
    const respons = await axios.get(`/news`);
    console.log(respons.data);
    return respons.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
