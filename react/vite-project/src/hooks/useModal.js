import { useState } from 'react';

// Custom hook to handle modal state and actions
export const useModal = () => {
  
  // State to track whether the modal is open or closed
  let [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  function openModal() {
    setIsOpen(true);
  }

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
  }

  // Function to toggle the modal state
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  // Return the modal state and actions
  return { isOpen, openModal, closeModal, toggleModal };
}
