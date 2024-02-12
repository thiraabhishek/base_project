import React, { useState } from 'react'

const useHover = () => {
  const [currentIndex, setCurrentIndex] = useState(null)
  
  const addHover = (index) => {
    setCurrentIndex(index)
  }

  const removeHover = () => {
    setCurrentIndex('')
  }

  return { currentIndex: currentIndex, addHover: addHover, removeHover: removeHover }
}
export default useHover;

