import {useState } from 'react';

export const useModal=()=> {

  let [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return {isOpen, openModal, closeModal}
}