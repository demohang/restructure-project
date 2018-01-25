import { HTTPUtil } from '../utils/HTTPUtil';
import { API } from '../helpers/Api';

export const READ_INFORMATION = 'READ_INFORMATION'; // 阅读消息
export const RECEIVE_TOP = 'RECEIVE_TOP'; // 获取top4数据
export const GET_NEWSNUMBER = 'GET_NEWSNUMBER'; // 消息条目数
export const GET_MEANSLUSER = 'GET_MEANSLUSER' // 用户信息
export const GET_PAPERQUESTION = 'GET_PAPERQUESTION' // 用户信息

/**
 * 消息已读
 * @param {*} newsID 消息ID
 */
export function readInformation() {
  return {
    type: READ_INFORMATION,
  }
}

/**
 * 获取top4数据
 * @param {*} json top4数据
 */
export function receiveTop(json) {
  return {
    type: RECEIVE_TOP,
    news: json
  }
}

/**
 * 获取消息数量
 * @param {*} num 
 */
export function newsNumber(num) {
  return {
    type: GET_NEWSNUMBER,
    num
  }
}

/**
 * 获取用户信息
 * @param {*} user 
 */
export function getMeansLuser(user) {
  return {
    type: GET_MEANSLUSER,
    user: user
  }
}

/**
 * 查询试卷所有题目
 * @param {*} json 
 */
export function getAllPageQuestionAndAnswer(json) {
  return {
    type: GET_PAPERQUESTION,
    json: json
  }
}

// 登录 暂时这么写
HTTPUtil.post(API.Login, 'loginname=123456&password=123456&code=').then((json) => {

})

// 未读消息数量
export function findNoreadMessageCount() {
  return function (dispatch) {
    return HTTPUtil.post(API.Findnoreadmessagecount).then((json) => {
      dispatch(newsNumber(json.num))
    })
  }
}

// 用户信息
export function meansLuser() {
  return function (dispatch) {
    return HTTPUtil.post(API.MeansLuser).then((json) => {
      dispatch(getMeansLuser(json.user))
    })
  }
}

// 未读消息前四条
export function findNoReadListsTop4() {
  return function (dispatch) {
    return HTTPUtil.post(API.Findnoreadliststop4).then((json) => {
      dispatch(receiveTop(json.list))
    })
  }
}

// 阅读消息
export function messagesToRead(messids) {
  return function (dispatch) {
    return HTTPUtil.post(API.MessagesToRead,'messids=' + messids).then((json) => {
      dispatch(readInformation())
    })
  }
}

// 查询试卷所有题目
export function allPageQuestionAndAnswer(examId,userid) {
  return function (dispatch) {
    return HTTPUtil.post(API.ByAllPageQuestionAdnAnswer,'examId=' + examId + '&userid=' + userid).then((json) => {
      dispatch(getAllPageQuestionAndAnswer())
    })
  }
}