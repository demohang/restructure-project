export const HTTPUtil = {};

export const ServerAPI = 'http://edusys.lenovo.com';
/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @returns {Promise}
 */
HTTPUtil.get = function(url, headers) {
    return new Promise(function (resolve, reject) {
        fetch(ServerAPI + url, {
            method: 'GET',
            // mode:'no-cors',
            headers: headers || {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                reject({status:response.status});
            }
        }).then((response) => {
            if (response.result == 200) {
                resolve(response);
            } else if (response.result == 404) {

            } else if (response.result == 500) {

            }
        }).catch((err)=> {
            reject({status: -1});
        })
    })
};


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param data
 * @returns {Promise}
 */
HTTPUtil.post = function(url, data, headers) {
    return new Promise(function (resolve, reject) {
        fetch(ServerAPI + url, {
            method: 'POST',
            // mode:'no-cors',
            headers: headers || {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: data,
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                reject({status:response.status});
            }
        }).then((response) => {
            if (response.result == 200) {
                resolve(response);
            } else if (response.result == 404) {

            } else if (response.result == 500) {

            }
        }).catch((err)=> {
            reject({status: -1});
        })
    })
};