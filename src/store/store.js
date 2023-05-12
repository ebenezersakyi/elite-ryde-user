import { configureStore } from "@reduxjs/toolkit";
import modal_slide from "./modal_slide";
import details_slice from "./dashboard_state_slice";
export const store = configureStore({
  reducer: {
    details: details_slice,
    modal: modal_slide
  },
});
