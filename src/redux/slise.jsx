import { createSlice } from '@reduxjs/toolkit';
import {} from './operation';
import { getNews } from './operation';
import { getFriends } from './operation';
import { getNotices } from './operation';

const initialState = {
  newsArray: [],
  friendsArray: [],
  noticesArray: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
// const handlePendingTotal = (state) => {
//   state.isLoadingTotal = true;
// };

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
// const handleRejectedTotal = (state, action) => {
//   state.isLoadingTotal = false;
//   state.errorTotal = action.payload;
// };

const getNewsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  console.log(action.payload);
  state.newsArray = action.payload.results;
};
// const removeArray = (state, action) => {
//   state.campersArray = [];
// };
const getFriendsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.friendsArray = action.payload;
};
const getNoticesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  console.log(action.payload);
  state.noticesArray = action.payload;
};
// const addFavoriteArrayFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.favoriteArray.push(action.payload);
// };
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
      .addCase(getNotices.rejected, handleRejected),
  //   .addCase(removeFavoriteItem().type, removeFavoriteArrayFulfilled)
  //   .addCase(emptyArray().type, removeArray)
  //   .addCase(newFilterArray().type, newFilterArrayCreate),
});

export const petsReducer = petsSlice.reducer;
