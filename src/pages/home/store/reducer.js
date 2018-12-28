import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  acticleList: [],
  articlePage: 1,
  showScroll: false
})

const changeList = (state, action) => {
  return state.merge({
    topicList: action.list.get('topicList'),
    recommendList: action.list.get('recommendList'),
    acticleList: action.list.get('articleList')
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    acticleList: state.get('acticleList').concat(action.list),
    articlePage: action.newPage //这里不用get，数值类型
  })
}

const changeShowScroll = (state, action) => {
  return state.set(
    'showScroll',
    action.show //这里不用get，数值类型
  )
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      return changeList(state, action)
    case actionTypes.ADD_ARTICLE_LIST:
      return addArticleList(state, action)
    case actionTypes.CHANGE_SHOW_SCROLL:
      return changeShowScroll(state, action)
    default:
      return state
  }
}
