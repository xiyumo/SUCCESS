function count(arr,n) {
    var num = 0;
    for(var i = 0 ;i < arr.length ;i++)
    {
        if(arr[i]==n) {
            num++;
        }
    }
    return num;
}
var arr = prompt('请输入数组arr');
var n = prompt('请输入n');
console.log(count(arr,n));