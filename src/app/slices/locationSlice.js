import {createSlice} from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'currentlocation',
  initialState: {
    currentAddress: '',
  },
  reducers: {
    getLocationAddress: (state, action) => {
      console.log('loc-state-->', action.payload);
      state.currentAddress = action.payload;
      console.log('currentAddress-state-->', state.currentAddress);
    },
  },
});

export const {getLocationAddress} = locationSlice.actions;

export default locationSlice.reducer;
