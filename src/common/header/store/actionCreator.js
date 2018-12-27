import {
  CHANGE_SEARCH_FOCUSED,
  CHANGE_RECOMMEND_LIST,
  CHANGE_MOUSE_ENTER,
  CHANGE_PAGE
} from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
export const changeSearchFocused = focused => ({
  type: CHANGE_SEARCH_FOCUSED,
  value: focused
})

export const changeMouseEnter = entered => ({
  type: CHANGE_MOUSE_ENTER,
  value: entered
})

export const changePage = page => ({
  type: CHANGE_PAGE,
  page
})

export const getList = () => {
  return async dispath => {
    const res = await axios.get('/api/todolist').catch(err => ({
      data: {
        code: -1,
        data: []
      }
    }))
    dispath(changeRecommendList([...res.data.data]))
    //如何缓存数据？？
  }
}

const changeRecommendList = list => ({
  type: CHANGE_RECOMMEND_LIST,
  list: fromJS(list), //注意⚠️，一定要把list这个数组编程immutable对象
  totalPage: Math.ceil(list.length / 10),
  recommendGot: true
})
