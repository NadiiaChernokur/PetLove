import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://petlove.b.goit.study/api`;

export const getNews = createAsyncThunk('news', async (data, thunkAPI) => {
  try {
    console.log(data);
    const { page, keyword } = data;
    const respons = await axios.get(
      `/news?page=${page ? page : 1}&keyword=${keyword ? keyword : ''}`
    );
    //const respons = await axios.get(`/news?keyword=ukrainian`);
    //const respons = await axios.get(`/news`);
    console.log(respons.data);
    return respons.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
