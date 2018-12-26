import { CHANGE_SEARCH_FOCUSED, CHANGE_RECOMMEND_LIST } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
export const changeSearchFocused = focused => ({
  type: CHANGE_SEARCH_FOCUSED,
  value: focused
})
export const changeRecommendList = list => ({
  type: CHANGE_RECOMMEND_LIST,
  list: fromJS(list) //注意⚠️，一定要把list这个数组编程immutable对象
})
export const getList = () => {
  return async dispath => {
    const res = await axios.get('/api/todolist')
    let list = []
    if (res.data.code == 0) {
      list = [...res.data.data]
    }
    dispath(changeRecommendList(list))
    //如何缓存数据？？
  }
}
