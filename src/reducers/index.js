import { combineReducers } from 'redux' 
import { GET_NEWSNUMBER } from '../actions/actionTypes.js'
 
function getNuewsNum(state = 0, action) {
  switch (action.type) {
    case GET_NEWSNUMBER:
      return action.num  //这里面的值是和action里面的值对应的
    default:
      return state
  }
}

const rootReducer = combineReducers({
  getNuewsNum
})

export default rootReducer