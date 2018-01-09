// import { combineReducers } from 'redux' 
import { READ_INFORMATION } from '../actions/actionTypes.js'
 
function readNews(state, action) {
  switch(action.type) {
    case READ_INFORMATION:
      return state
    default: 
      return state
  }
}

// const readFun = combineReducers({
//   readNews
// })

export default readNews