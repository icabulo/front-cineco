/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modalIsOpen: {
    sideMenuModal: false,
    loginModal: false,
    landingModal: true,
  },
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      switch (action.payload) {
        case "sideMenuModal":
          state.modalIsOpen.sideMenuModal = true
          break
        case "loginModal":
          state.modalIsOpen.loginModal = true
          break
        case "landingModal":
          state.modalIsOpen.loginModal = true
          break
        default:
      }
    },
    closeModal: (state, action) => {
      switch (action.payload) {
        case "sideMenuModal":
          state.modalIsOpen.sideMenuModal = false
          break
        case "loginModal":
          state.modalIsOpen.loginModal = false
          break
        case "landingModal":
          state.modalIsOpen.landingModal = false
          break
        default:
      }
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
