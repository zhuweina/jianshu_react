import { CHANGE_LIST } from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const getList = () => {
  return async dispatch => {
    const res = await axios.get('./api/lists.json')
    dispatch(changeList(res.data.data))
  }
}

const changeList = list => ({
  type: CHANGE_LIST,
  list: fromJS(list)
})
