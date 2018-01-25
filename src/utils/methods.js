/**
 * 时间转换
 * @param {*} s_date 
 * @param {*} type 
 */
export function dataTransformation(s_date,type) {
    let dateNow = s_date;
    let date = new Date(dateNow);
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    if (M < 10) {
        M = "0" + M
    }
    let T = date.getDate();
    if (T < 10) {
        T = "0" + T
    }
    let S = date.getHours();
    if (S < 10) {
        S = "0" + S
    }
    let m = date.getMinutes();
    if (m < 10) {
        m = "0" + m
    }
    let s = date.getSeconds();
    if (s < 10) {
        s = "0" + s
    }
    let ruData = null;
    if (type === undefined || type === '-') {
        return ruData = Y + "-" + M + "-" + T + " " + S + ":" + m + ":" + s;
    } else if (type === '/') {
        return ruData = Y + "/" + M + "/" + T + " " + S + ":" + m + ":" + s;
    }
}