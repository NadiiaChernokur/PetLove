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
export const getNoticesResponse = createAsyncThunk(
  'noticesResponse',
  async (data, thunkAPI) => {
    try {
      const { category, gender, keyword, location, petType, sortBy } = data;
      console.log(keyword);
      //   const respons = await axios.get(
      //     `/notices?keyword=${keyword}&category=${category}&species=${petType}&sex=${gender}&locationId=${location}&by${sortBy}=true`
      //   );
      const respons = await axios.get(
        `/notices?keyword=${keyword}&category=${category}&species=${petType}&locationId=${location}&by${sortBy}=true&sex=${gender}&page=1`
      );
      console.log(respons.data);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getSpecies = createAsyncThunk('species', async (_, thunkAPI) => {
  try {
    const respons = await axios.get(`/notices/species`);
    console.log(respons.data);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addPet = createAsyncThunk('addPet', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/users/current/pets/add`, data);
    console.log(respons.data);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logOut = createAsyncThunk('logOut', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/users/signout`);
    console.log(respons.data);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('logIn', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/users/signin`, data);
    console.log(respons.data);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
