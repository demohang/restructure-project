import { combineReducers } from 'redux' 
import { GET_NEWSNUMBER, GET_MEANSLUSER } from '../actions/actionTypes.js'
 
// 消息数量
function getNuewsNum(state = 0, action) {
  switch (action.type) {
    case GET_NEWSNUMBER:
      return action.num  //这里面的值是和action里面的值对应的
    default:
      return state
  }
}

// 用户信息
function getUserMessage(state = { }, action) {
  switch (action.type) {
    case GET_MEANSLUSER:
      return Object.assign({}, state, action.user)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  getNuewsNum,
  getUserMessage
})

export default rootReducer