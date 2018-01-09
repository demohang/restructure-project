
export const READ_INFORMATION = 'READ_INFORMATION'; // 阅读消息

export function readInformation(text) {
    return { type: READ_INFORMATION, text}
}

