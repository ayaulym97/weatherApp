import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type NotificationType = 'error' | 'success';

export interface SelectedCityItem {
  id: string;
  lat: string;
  lon: string;
  name: string;
  coord?: {
    lat: string;
    long: string;
  };
}

export interface WeatherProps {
  selectedCity: SelectedCityItem | null;
  savedCities: SelectedCityItem[];
}

const initialState: WeatherProps = {
  selectedCity: null,
  savedCities: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addToSavedCities(state, {payload}: PayloadAction<SelectedCityItem>) {
      const index = state.savedCities.findIndex(city => city.id === payload.id);
      if (index === -1) {
        state.savedCities.push(payload);
      } else {
        state.savedCities.splice(index, 1);
      }
    },
  },
});
export const {addToSavedCities} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
