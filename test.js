let arr = [0, 1, 0, 3, 12];
        let target = 0;
        let res = [];
for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            res.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    console.log(arr);