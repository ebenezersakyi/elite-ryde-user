import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    toShow: {
        log_out: false,
        setting: false,
        filter: false
    }
}

const modal_sice = createSlice({
    name:  'modal-slice',
    initialState,
    reducers: {
        show_log_out: (state) => {
            state.show = true
            state.toShow.log_out = true
            state.toShow.setting = false
            state.toShow.filter = false
        },
        show_settings: (state) => {
            state.show = true
            state.toShow.log_out = false
            state.toShow.setting = true
            state.toShow.filter = false
        },
        show_filter: (state) => {
            state.show = true
            state.toShow.log_out = false
            state.toShow.setting = false
            state.toShow.filter = true
        },

        hide_modal: (state) => {
            state.show = false
        }
        
    }
})

export const {
    show_filter,
    show_log_out,
    show_settings,
    hide_modal
} = modal_sice.actions

export default modal_sice.reducer