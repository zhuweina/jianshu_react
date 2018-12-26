// 只是为了使/store/reducer.js引入header reducer的时候目录少一级
import { default as headerReducer } from './reducer'
import * as actionCreators from './actionCreator'
import * as actionTypes from './actionCreator'

export { headerReducer, actionCreators, actionTypes }
