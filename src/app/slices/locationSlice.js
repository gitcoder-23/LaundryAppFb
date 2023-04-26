import {createSlice} from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'currentlocation',
  initialState: {
    countryCode: '',
    currentAddress: '',
  },
  reducers: {
    getLocationAddress: (state, action) => {
      // console.log('loc-state-->', action.payload);
      state.currentAddress = action.payload;
      console.log('currentAddress-state-->', state.currentAddress);
    },

    getCountryCode: (state, action) => {
      console.log('loc-state-->', action.payload);
      state.countryCode = action.payload;
      console.log('countryCode-state-->', state.countryCode);
    },
  },
});

export const {getLocationAddress, getCountryCode} = locationSlice.actions;

export default locationSlice.reducer;
