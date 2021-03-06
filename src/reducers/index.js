import { combineReducers } from 'redux' 
import { GET_NEWSNUMBER, GET_MEANSLUSER, RECEIVE_TOP, READ_INFORMATION, GET_PAPERQUESTION } from '../actions/actionTypes.js'
 
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

// 获取前4条未读消息
function getNoreadListsTop4(state = [], action) {
  switch (action.type) {
    case RECEIVE_TOP:
      return [...action.news];
    default:
      return state
  }
}

function readNews(state = 200, action) {
  switch (action.type) {
    case READ_INFORMATION:
      return state;
    default:
      return 500
  }
}

function getPaper(state = {}, action) {
  switch (action.type) {
    case GET_PAPERQUESTION:
      return Object.assign({}, state, action.json);
    default:
      return state
  }
}

const rootReducer = combineReducers({
  getNuewsNum,
  getUserMessage,
  getNoreadListsTop4,
  readNews,
  getPaper
})

export default rootReducer