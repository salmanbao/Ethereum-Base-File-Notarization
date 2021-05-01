import { SET_FILE_CHECK } from '../actions/types'

const initialState = {
  date: '',
  error: '',
  comment: '',
  filename: '',
  uploadedBy: '',
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILE_CHECK:
      return action.payload
    default:
      return state
  }
}
