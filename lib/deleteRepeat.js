module.exports = arr => {
    return [...new Set(arr)].join('');
}