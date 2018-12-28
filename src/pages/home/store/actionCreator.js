import {
  CHANGE_LIST,
  ADD_ARTICLE_LIST,
  CHANGE_SHOW_SCROLL
} from './actionTypes'
import { fromJS, List } from 'immutable'
import axios from 'axios'

export const getList = () => {
  return async dispatch => {
    const res = await axios.get('./api/lists.json')
    dispatch(changeList(res.data.data))
  }
}

export const getMoreList = page => {
  return async dispatch => {
    const newPage = page - 0 + 1
    const moreList = await axios.get(
      '/api/moreArticleList.json?page=' + newPage
    )
    dispatch(addArticleList([...moreList.data.data], newPage))
  }
}

export const changeScrollShow = show => {
  return {
    type: CHANGE_SHOW_SCROLL,
    show
  }
}

const changeList = list => ({
  type: CHANGE_LIST,
  list: fromJS(list) //也可以转换为一个immutable对象
})

const addArticleList = (list, newPage) => ({
  type: ADD_ARTICLE_LIST,
  list: fromJS(list), //List方法只会让一层变成immutable
  newPage
})
