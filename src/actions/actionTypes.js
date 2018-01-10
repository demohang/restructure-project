import { HTTPUtil } from '../utils/HTTPUtil';
import { API } from '../helpers/Api';

export const READ_INFORMATION = 'READ_INFORMATION'; // 阅读消息
export const RECEIVE_TOP = 'RECEIVE_TOP'; // 获取top4数据
export const GET_NEWSNUMBER = 'GET_NEWSNUMBER'; // 消息条目数
export const GET_MEANSLUSER = 'GET_MEANSLUSER' // 用户信息

/**
 * 消息已读
 * @param {*} newsID 消息ID
 */
export function readInformation(newsID) {
    return { 
        type: READ_INFORMATION, 
        newsID
    }
}

/**
 * 获取top4数据
 * @param {*} json top4数据
 */
export function receiveTop(json) {
    return {
        type: RECEIVE_TOP,
        posts: json
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

export function getMeansLuser(user) {
    return {
        type: GET_MEANSLUSER,
        user: user
    }
}

// 登录 暂时这么写
HTTPUtil.post(API.Login,'loginname=123456&password=123456&code=').then((json) => {
    
})


function fetchPosts() {
    return function (dispatch) {
        return HTTPUtil.post(API.Findnoreadmessagecount).then((json) => {
            dispatch(newsNumber(json.num))
        })
    }
}

export function findNoreadMessageCount() {
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}

function fetchPosts2() {
    return function (dispatch) {
        return HTTPUtil.post(API.MeansLuser).then((json) => {
            dispatch(getMeansLuser(json.user))
        })
    }
}

export function meansLuser() {
    return (dispatch, getState) => {
        return dispatch(fetchPosts2())
    }
}

