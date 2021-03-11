function Animal(){
    this.species = "动物";
}
function Cat(name,color){
    this.name = name;
    this.color = color;
}
//方法一 原型链继承
Cat.prototype = new Animal();
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);

//方法二 空对象继承
function emp(Child , Parent){
    var K = function(){
        K.prototype = Parent.prototype;
        Child.prototype = new K();
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    }
}
emp(Cat , Animal);
var cat2 = new Cat("大毛","黄色");
console.log(cat2.species);

//方法三 拷贝继承
function extend(Animal,Cat){
    var c = Cat.prototype;
    var a = Animal.prototype;
    for(var i in Animal.prototype){
        c[i] = a[i];
    }
    return Cat;
}
var cat3 = extend(Cat,Animal);
cat3 = new Cat("大毛","黄色");
console.log(cat3.species);