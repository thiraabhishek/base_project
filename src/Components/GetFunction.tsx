import { userData } from '../api'

let setRequestFunction: () => void

let searchFilter = ''

const searchFunction = ''

export const GetApiFunction = (id: string) => {
  if (id === 'users') {
    setRequestFunction = userData
  }

  return { setRequestFunction, searchFilter }
}

export const GetSearchApiFunction = (id: string) => {
  return { searchFunction }
}
