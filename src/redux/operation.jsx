import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://petlove.b.goit.study/api`;
export const safeToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = createAsyncThunk('logIn', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/users/signin`, data);

    safeToken(respons.data.token);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const registration = createAsyncThunk(
  'registration',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.post(`/users/signup`, data);

      safeToken(respons.data.token);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'currentUser',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.get(`/users/current/full`);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getEditUser = createAsyncThunk(
  'editUser',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.patch(`/users/current/edit`, data);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const toFavoriteAdd = createAsyncThunk(
  'favoriteAdd',
  async (id, thunkAPI) => {
    try {
      const respons = await axios.post(`/notices/favorites/add/${id}`);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const toFavoriteRemove = createAsyncThunk(
  'favoriteRemove',
  async (id, thunkAPI) => {
    try {
      const respons = await axios.delete(`/notices/favorites/remove/${id}`);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNews = createAsyncThunk('news', async (data, thunkAPI) => {
  try {
    const { page, keyword } = data;
    const respons = await axios.get(
      `/news?page=${page ? page : 1}&keyword=${keyword ? keyword : ''}`
    );

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
      const { category, gender, keyword, location, petType, sortBy, toPage } =
        data;

      const respons = await axios.get(
        `/notices?keyword=${keyword}&category=${category}&species=${petType}&locationId=${location}&by${sortBy}=true&sex=${gender}&page=${toPage}`
      );

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getSpecies = createAsyncThunk('species', async (_, thunkAPI) => {
  try {
    const respons = await axios.get(`/notices/species`);

    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addPet = createAsyncThunk('addPet', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/users/current/pets/add`, data);

    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deletePet = createAsyncThunk('deletePet', async (id, thunkAPI) => {
  try {
    const respons = await axios.delete(`/users/current/pets/remove/${id}`);

    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const logOut = createAsyncThunk('logOut', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/users/signout`);

    clearToken();
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
