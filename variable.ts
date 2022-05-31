export { }
/**
 * 变量声明：const 和 let;
 * 1.const|let使用的是块级作用域;var使用的是函数作用域。 
 * 2.const|let需先声明再使用;var可先使用再声明。
 * 3.var 可多次声明，且最后得到的只有一个；let只能声明一次。*/


//let 是块级作用域
// function f(input:boolean){
//     let a = 100;
//     if(input){
//         let b = a+1;
//         return b;
//     }
//     return b;//报错
// }

// console.log(f(true));

//let需先声明再使用
// function foo() {
//     return a;
// }

// console.log(foo());//报错
// let a = 12;

//let只能声明一次
// function g(){
//     let x =100;
//     var x=100;
//     console.log(x);
// };
// g();

//在作用域内，创建环境变量
// function theCityThatAlwaysSleeps(){
//     let getCity;
//     if(true){
//         let city = "Seattle111";
//         let getCity=function(){
//             return city;
//         }
//     }
//     return getCity();
// }

// console.log(theCityThatAlwaysSleeps())

//针对每次迭代创建一个作用域
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 100);
// }


//const:声明后不能更改
// const a=1;
// a=2//报错


// let vs const 使用最小特权原则，所有变量除了你计划去修改的都应该使用const;如果一个变量不需要对它写入，那么其他使用这些代码的人也bu能够写入他们，使用const更容易推测数据的流动。

//数组的解构
// let input = [1,2];
// let [first,second] = input;
// console.log(first,second);//1 2
// [second,first] = [first,second];
// console.log(first,second);//2 1
// function f([first,second]:[number,number]){
//     console.log(first,second);
// }
// let input1:[number,number]=[1,2]
// f(input1);//1 2

//在数组里面使用解构赋值...语法创建剩余变量
// let [first,...rest]=[1,2,3,4];
// console.log(first,rest);//1 [2,3,4]

// //忽略尾随元素
// let [first]=[1,2,3,4];
// console.log(first);//1

//对象的解构
let o = {
    a:'foo',
    b:12,
    c:'bar'
};
// let {a,b}=o;
// console.log(a,b)//foo 12

// let { a, b } ={a:11,b:22};
// console.log(a,b);//11 22

//在对象里面使用...语法创建剩余变量
// let { a,...passthrough } = o;
// console.log(passthrough);//{b:12,c:'bar'}
// let total = passthrough.b+passthrough.c.length;
// console.log(total);//15

//属性重命名
// let {a:newName,b:newName2}:{a:string,b:number}=o;
// console.log(newName,newName2);//foo 12 前面的:newName是属性重命名，后面的:{a:string,b:number}是指定类型

//默认值：使用=来实现，当属性为undefined时使用默认值
// function keepWholeObject(wholeObject:{a:string,b?:number}){
//     let {a,b=100}=wholeObject;
//     console.log(a,b);
// }
// keepWholeObject({a:'aa'});//aa 100

//解构用于函数声明
// type C = {a:string,b?:number};
// function f({a,b}:C):void{
//     console.log(a,b);
// }
// f({a:'aa',b:1});//aa 1

//指定默认值的类型推断
// function f({a='',b=0}={}):void{
//     console.log(a,b);//  0
// }
// f();

//展开操作符...,允许将一个数组展开为另一个数组，或将一个对象展开为另一个对象
//展开数组
// let first = [1,2];
// let second=[3,4];
// let bothPlus=[0,...first,...second];
// console.log(bothPlus);//[0,1,2,3,4]

//展开对象
// let defaults = {food:'salad',price:'10$'};
// let search = {...defaults,food:'rich'};
// console.log(search);// {food:'rich',price:'10$'}

//展开对象时，仅仅包含对象自身的可枚举属性，即展开一个对象实例时，会丢失其方法。
class C{
    p=12;
    m(){

    }
}
let c = new C();
let clone = {...c};
console.log(clone.p);//12
console.log(clone.m);//报错
