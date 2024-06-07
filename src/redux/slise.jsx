import { createSlice } from '@reduxjs/toolkit';
import {
  addPet,
  deletePet,
  getCurrentUser,
  getEditUser,
  getSpecies,
  logIn,
  logOut,
  registration,
  toFavoriteAdd,
  toFavoriteRemove,
} from './operation';
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
  registr: [],
  user: [],
  favoriteArray: [],
  isLoading: false,
  isLoadingCategory: false,
  isLoadingLocation: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handlePendingCategory = (state) => {
  state.isLoadingCategory = true;
};
// const handlePendingLocation = (state) => {
//   state.isLoadingLocation = true;
// };

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const getNoticesCategoriesFulfilled = (state) => {
  state.isLoadingCategory = false;
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
const deletePetFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
  // state.newPet = action.payload;
};
const getSpeciesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.species = action.payload;
};
const logOutFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
  state.user = [];
  state.logIn = [];
  state.registr = [];
};
const logInFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.logIn = action.payload;
};
const registrFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.registr = action.payload;
};
const getCurrentUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
};
const editUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
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
  state.noticesResponse = action.payload;
};
const addToFavoriteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favoriteArray = action.payload;
};
const removeFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favoriteArray = action.payload;
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
      .addCase(getNoticesCategories.pending, handlePendingCategory)
      .addCase(getNoticesCategories.fulfilled, getNoticesCategoriesFulfilled)
      .addCase(getNoticesCategories.rejected, handleRejected)
      .addCase(getNoticesResponse.pending, handlePending)
      .addCase(getNoticesResponse.fulfilled, getNoticesResponseFulfilled)
      .addCase(getNoticesResponse.rejected, handleRejected)
      .addCase(toFavoriteAdd.pending, handlePending)
      .addCase(toFavoriteAdd.fulfilled, addToFavoriteFulfilled)
      .addCase(toFavoriteAdd.rejected, handleRejected)
      .addCase(toFavoriteRemove.pending, handlePending)
      .addCase(toFavoriteRemove.fulfilled, removeFulfilled)
      .addCase(toFavoriteRemove.rejected, handleRejected)
      .addCase(addPet.pending, handlePending)
      .addCase(addPet.fulfilled, addPetFulfilled)
      .addCase(addPet.rejected, handleRejected)
      .addCase(deletePet.pending, handlePending)
      .addCase(deletePet.fulfilled, deletePetFulfilled)
      .addCase(deletePet.rejected, handleRejected)
      .addCase(getSpecies.pending, handlePending)
      .addCase(getSpecies.fulfilled, getSpeciesFulfilled)
      .addCase(getSpecies.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, logOutFulfilled)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, logInFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, registrFulfilled)
      .addCase(registration.rejected, handleRejected)
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(getCurrentUser.fulfilled, getCurrentUserFulfilled)
      .addCase(getCurrentUser.rejected, handleRejected)
      .addCase(getEditUser.pending, handlePending)
      .addCase(getEditUser.fulfilled, editUserFulfilled)
      .addCase(getEditUser.rejected, handleRejected),
});

export const petsReducer = petsSlice.reducer;
