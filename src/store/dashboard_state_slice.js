import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start_price: "200",
  end_price: "1500",
  car_model: "",
  transmission: "",
  engine_type: "",
  body_style: "",
  engine_size: "",
  registration_year: "",
  color: "",
  number_of_seats: '',
  location: "",
  pick_up_date: new Date().toDateString(),
  return_date: new Date().toDateString(),
};

export const details_slice = createSlice({
  name: "details selectors",
  initialState,
  reducers: {
    set_starting_price: (state, action) => {
      state.start_price = action.payload;
    },
    set_end_price: (state, action) => {
      state.end_price = action.payload;
    },
    set_car_model: (state, action) => {
      state.car_model = action.payload;
    },
    set_transmisson: (state, action) => {
      state.transmission = action.payload;
    },
    set_engine_type: (state, action) => {
      state.engine_type = action.payload;
    },
    set_body_style: (state, action) => {
      state.body_style = action.payload;
    },
    set_engine_size: (state, action) => {
      state.engine_size = action.payload;
    },
    set_registration_year: (state, action) => {
      state.registration_year = action.payload;
    },
    set_location: (state, action) => {
      state.location = action.payload;
    },
    set_pick_up_date: (state, action) => {
      state.pick_up_date = action.payload;
    },
    set_return_date: (state, action) => {
      state.return_date = action.payload;
    },
    set_color: (state, action) => {
      state.color= action.payload;
    },
    set_number_of_seats: (state, action) => {
      state.number_of_seats = action.payload;
    },
    
  },
});

export const {
  set_starting_price,
  set_end_price,
  set_car_model,
  set_body_style,
  set_engine_size,
  set_engine_type,
  set_location,
  set_pick_up_date,
  set_registration_year,
  set_return_date,
  set_transmisson,
  set_number_of_seats,
  set_color
} = details_slice.actions;

export default details_slice.reducer;
