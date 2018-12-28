import axios from 'axios'
import * as actionTypes from './actionTypes'
export const login = (account, password) => {
  return async dispatch => {
    const res = await axios.get(
      `/api/login.json?account=${account}&password=${password}`
    )
    if (res.data.code === 0) {
      dispatch(changeLogin(true))
    } else {
      console.log('登陆失败')
    }
  }
}

export const changeLogin = login => {
  return {
    type: actionTypes.CHANGE_LOGIN,
    login
  }
}
