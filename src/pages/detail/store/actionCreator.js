import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
export const getDetail = () => {
  return async dispatch => {
    const res = await axios.get('/api/article.json')
    dispatch(changeDetail(res.data))
  }
}

const changeDetail = detail => {
  return {
    type: actionTypes.CHANGE_DETAIL,
    detail: fromJS(detail)
  }
}
