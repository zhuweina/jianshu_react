import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
  recommendGot: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_FOCUSED:
      return state.set('focused', action.value)
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage,
        recommendGot: action.recommendGot
      })
    case actionTypes.CHANGE_MOUSE_ENTER:
      return state.set('mouseIn', action.value)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
