import { configureStore } from "@reduxjs/toolkit";

import details_slice from "./dashboard_state_slice";
export const store = configureStore({
  reducer: {
    details: details_slice,
  },
});
