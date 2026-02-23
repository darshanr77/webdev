let arr = [1,2,3,4,5,6];
let num = 2;

for(let i=0; i<6; i++){
    if( arr[i] == num ){
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);