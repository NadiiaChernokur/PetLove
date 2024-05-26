import { createSlice } from '@reduxjs/toolkit';
import {} from './operation';
import { getNews } from './operation';
import { getFriends } from './operation';
import { getNotices } from './operation';
import { getNoticesCategories } from './operation';
// import { getLocation } from './operation';

const initialState = {
  newsArray: [],
  friendsArray: [],
  noticesArray: [],
  categoriesArray: [],
  location: [],
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
const getLocationFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  console.log(action.payload);
  state.location = action.payload;
};
// const removeFavoriteArrayFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;

//   state.favoriteArray = state.favoriteArray.filter(
//     (auto) => auto._id !== action.payload
//   );
// };

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
      .addCase(getNoticesCategories.rejected, handleRejected),
  //   .addCase(getLocation.pending, handlePending)
  //   .addCase(getLocation.fulfilled, getLocationFulfilled)
  //   .addCase(getLocation.rejected, handleRejected),
});

export const petsReducer = petsSlice.reducer;
