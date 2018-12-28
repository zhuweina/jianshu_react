import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content:
    '<img src="//upload.jianshu.io/admin_banners/web_images/4593/fa5490809ff3344c5aa72312aa1e05921be77222.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" /><p>这是一段很长的内容</p>'
})

const changeDetail = (state, action) => {
  return state.merge({
    title: action.detail.get('title'),
    content: action.detail.get('content')
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return changeDetail(state, action)
    default:
      return state
  }
}
