let arr = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}];
function shuxiPaiXu(k){
    return function(a,b) {
        return a[k]- b[k];
    }
}
console.log(arr.sort(shuxiPaiXu('id')));