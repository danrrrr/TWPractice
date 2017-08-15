module.exports = arr => {
    arr.sort((a,b) => a - b);
    return arr.length % 2 === 0 ? (arr[arr.length/2] + arr[arr.length/2 -1])/2 : arr[Math.floor(arr.length/2)];
}

