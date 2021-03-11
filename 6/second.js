var ary = [1, [2, [3, [4, 5]]], 6];
let arr1 = [];
function even (arr) {
    //方法一
    //return arr.flat(Infinity);

    //方法二
    for( let i = 0 ; i < arr.length ; i++)
    {
        if(Array.isArray(arr[i])) {
            even (arr[i]);
        }
        else {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(even(ary));
//[1,2,3,4,5,6]