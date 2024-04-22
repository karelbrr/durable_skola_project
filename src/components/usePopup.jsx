import { useState } from 'react';

const usePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return { isPopupOpen, togglePopup };
};

export default usePopup;