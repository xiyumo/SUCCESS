function sort(arr){
    var temp;
    for(var i = 0 ;i < arr.length - 1 ;i++)
    {
        for(var j = i + 1 ;j < arr.length ;j++)
        {
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr = [3,5,2,43,12,56,23];
console.log(sort(arr));