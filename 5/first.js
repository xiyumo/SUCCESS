var str = 'today is a happy day';
function change (str) {
    var arr = str.split(' ');
    for (var i = 0 ;i < arr.length ;i++)
    {
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}
change(str);
console.log(change(str));