export const emojis = [
    '😀', '😄', '😅', '🤣', '😂', '😉', '😊', '😍', '😘', '😜',
    '😝', '😏', '😒', '🙄', '😔', '😴', '😷', '🤮', '🥵', '😎',
    '😮', '😰', '😭', '😱', '😩', '😡', '💀', '👽', '🤓', '🥳',
    '😺', '😹', '😻', '🤚', '💩', '👍', '👎', '👏', '🙏', '💪'
];
export const messageStringify = (type,message) => {
    if (!type){
        return "";
    }else if (type === 1){//文字消息
        return message;
    }else if (type === 2){//表情消息
        return emojis[parseInt(message)];
    }
};


