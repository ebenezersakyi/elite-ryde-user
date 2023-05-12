import Modal from '@mui/material/Modal';
import LogOut from '../pop_ups/LogOut';
import Filter from '../pop_ups/Filter';
import React from 'react';
import { hide_modal } from '../../../store/modal_slide';
import { useSelector, useDispatch } from 'react-redux';
const CModal = () => {
  const dispatch = useDispatch()
  const { show, toShow: {log_out, setting, filter} } = useSelector((state) => state.modal)
  return (
    <Modal
    className='h-full w-full grid place-items-center bg-[#00000074]'
    disableAutoFocus={true}
    open={show}
    onClose={() => {
      dispatch(hide_modal())
    }}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
   <>
   {
    log_out ? <LogOut /> : setting ? <p className="text-egreen">setting</p>: filter ? <Filter /> : dispatch(hide_modal())
   }</>
    </Modal>
  )
}

export default CModal