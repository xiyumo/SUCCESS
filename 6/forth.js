var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
          { name: "summer",  sex: "woman"},
          { name: "daWen",   sex: "woman"},
          { name: "yang",    sex: "man" }  ], 
    work: { 
            time: "2019", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}
//方法一 JSON
let data1 = JSON.parse(JSON.stringify(data));
console.log(data1);

//方法二 Object.assign
var data2 = Object.assign({},data);
console.log(data2);

//方法三 递归拷贝
function Copy(target){
    let result = Array.isArray(target) ? [] : {} ;
    if(target && typeof target === 'object'){
        for(let i in target){
            if(target[i] && target[i] === 'object'){
                result[i] = target[i];
            }else {
                result[i] = target[i];
            }
        }
    }
    return result;
}
var data3 = Copy(data)
console.log(data3);