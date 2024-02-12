import { useState } from 'react'

export const useInput = () => {
  const [inputFocus, setInputFocus] = useState(false)
  const addFocus = () => {setInputFocus(true)}
  const removeFocus = () => {setInputFocus(false)}

  return {
    focus: inputFocus,
    addFocus:addFocus,
    removeFocus:removeFocus
  }
}
