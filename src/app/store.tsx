import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  counter: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
});

// Extract actions and reducer from the slice
const { actions, reducer } = counterSlice;

const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

// Export actions and store
export const { increment, decrement } = actions;
export default store;
