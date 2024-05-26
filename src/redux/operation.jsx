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
    // return respons.data.results;
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getFriends = createAsyncThunk('friends', async (_, thunkAPI) => {
  try {
    const respons = await axios.get(`/friends`);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const getNotices = createAsyncThunk('notices', async (_, thunkAPI) => {
  try {
    const respons = await axios.get(`/notices`);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const getNoticesCategories = createAsyncThunk(
  'categories',
  async (_, thunkAPI) => {
    try {
      const categori = await axios.get(`/notices/categories`);
      const sex = await axios.get(`/notices/sex`);
      const species = await axios.get(`/notices/species`);
      const location = await axios.get(`/cities/`);
      return {
        categoris: categori.data,
        sex: sex.data,
        species: species.data,
        location: location.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const getLocation = createAsyncThunk('cities', async (_, thunkAPI) => {
//   try {
//     const respons = await axios.get(`/cities/`);
//     console.log(respons);
//     return respons.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
