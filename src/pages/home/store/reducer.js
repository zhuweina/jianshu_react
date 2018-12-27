import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  acticleList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      return state.merge({
        topicList: action.list.get('topicList'),
        recommendList: action.list.get('recommendList'),
        acticleList: action.list.get('articleList')
      })
    default:
      return state
  }
}
