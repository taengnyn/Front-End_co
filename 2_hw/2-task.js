function smth(arr){

    let leftSum = 0;
    let rightSum = 0;
    for(let i=0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            rightSum += arr[j];
        }

        for(let k = i-1; k < arr.length; k--){
            leftSum += arr[k];
        }
        if(rightSum == leftSum){
            return arr[i]; 
        }
    }
    return -1;
}


console.log(smth([1,2,3,4,3,2,1]));