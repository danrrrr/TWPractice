module.exports = (str, len, ch) => {
    return Array(len - str.length).fill(ch).join('') + str;

}