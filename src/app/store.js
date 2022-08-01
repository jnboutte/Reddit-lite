import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './RedditSlice';
import subRedditReducer from './SubRedditSlice';

export default configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
});
