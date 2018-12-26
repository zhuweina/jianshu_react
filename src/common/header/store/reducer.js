import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.CHANGE_SEARCH_FOCUSED) {
    return state.set('focused', action.value)
  }
  if (action.type === actionTypes.CHANGE_RECOMMEND_LIST) {
    return state.set('list', action.list)
  }

  return state
}
