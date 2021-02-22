var arr = ['A','B','C','D','E','E','F','G','H','J','K','K','M'];
function recur(arr) {
    var obj = {};
    var drr = [];
    for(var i = 0 ;i < arr.length ;i++)
    {
        var chars = arr[i];
        if(obj[chars]) {
            obj[chars]++;
        }
        else {
            obj[chars] = 1 ;
        }
    }
    for(k in obj){
        if(obj[k] > 1){
            for(var j = 0 ; j < obj[k];j++)
            {
                drr.push(k);
            }
        }
    }
    return drr;
}
recur(arr);
console.log(recur(arr));