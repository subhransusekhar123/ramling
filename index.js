let x = [[1,2,3],[4,5],9,8,[0]];

function flatten(arr){
    let arr1 = []; 
    
    for(let i = 0 ; i < arr.length ; i++){
        if(typeof(arr[i]) === "object" || typeof(arr[i] === "string") ){
            for(let j = 0 ; j < arr[i].length ; j++){
                arr1.push(arr[i][j])
            }
        }else{
            arr1.push(arr[i])
        }
    }
    console.log(arr1)
}

flatten(x)