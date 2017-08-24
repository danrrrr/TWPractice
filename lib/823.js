module.exports = arr => {
    return arr.join(',').split(',').map(x => parseInt(x));
}