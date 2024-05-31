import { createSlice } from '@reduxjs/toolkit';
import { addPet, getSpecies, logIn, logOut } from './operation';
import { getNews } from './operation';
import { getFriends } from './operation';
import { getNotices } from './operation';
import { getNoticesCategories } from './operation';
import { getNoticesResponse } from './operation';
// import { getLocation } from './operation';

const initialState = {
  newsArray: [],
  friendsArray: [],
  noticesArray: [],
  categoriesArray: [],
  location: [],
  noticesResponse: [],
  newPet: [],
  species: [],
  logIn: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const getNoticesCategoriesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  //   state.categoriesArray = action.payload;
};

const getNewsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.newsArray = action.payload.results;
};

const getFriendsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.friendsArray = action.payload;
};
const getNoticesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.noticesArray = action.payload;
};
const addPetFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.newPet = action.payload;
};
const getSpeciesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.species = action.payload;
};
const logOutFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // state.species = action.payload;
};
const logInFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.logIn = action.payload;
};
// const getLocationFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   console.log(action.payload);
//   state.location = action.payload;
// };
const getNoticesResponseFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  console.log(action.payload);
  state.noticesResponse = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getNews.pending, handlePending)
      .addCase(getNews.fulfilled, getNewsFulfilled)
      .addCase(getNews.rejected, handleRejected)
      .addCase(getFriends.pending, handlePending)
      .addCase(getFriends.fulfilled, getFriendsFulfilled)
      .addCase(getFriends.rejected, handleRejected)
      .addCase(getNotices.pending, handlePending)
      .addCase(getNotices.fulfilled, getNoticesFulfilled)
      .addCase(getNotices.rejected, handleRejected)
      .addCase(getNoticesCategories.pending, handlePending)
      .addCase(getNoticesCategories.fulfilled, getNoticesCategoriesFulfilled)
      .addCase(getNoticesCategories.rejected, handleRejected)
      .addCase(getNoticesResponse.pending, handlePending)
      .addCase(getNoticesResponse.fulfilled, getNoticesResponseFulfilled)
      .addCase(getNoticesResponse.rejected, handleRejected)
      .addCase(addPet.pending, handlePending)
      .addCase(addPet.fulfilled, addPetFulfilled)
      .addCase(addPet.rejected, handleRejected)
      .addCase(getSpecies.pending, handlePending)
      .addCase(getSpecies.fulfilled, getSpeciesFulfilled)
      .addCase(getSpecies.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, logOutFulfilled)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, logInFulfilled)
      .addCase(logIn.rejected, handleRejected),
});

export const petsReducer = petsSlice.reducer;
