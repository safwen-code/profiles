import { SET_ALERT, REMOVE_ALERT } from '../action/types'

const initialState = []

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_ALERT:
      return [...state, payload]

    case REMOVE_ALERT:
      return state.filter((el) => el.id !== payload)

    default:
      return state
  }
}
