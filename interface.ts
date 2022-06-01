export { };
//接口：是对数据结构的描述，为了这些类型命名和为你的代码或第三方代码定义契约。
//ps：类型检查不会检查顺序，只会检查属性是否存在且类型是对的。
// interface LabelledValue {
//     label:string
// }
// function printLabel(labelledObj:LabelledValue){
//     console.log(labelledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

//可选属性：使用？
// interface SquareConfig {
//     color?:string;
//     width?:number
// }
// function createSquare(config:SquareConfig):{color:string,area:number}{
//     let newSquare={color:'White',area:100};
//     if(config.color){
//         newSquare.color=config.color;
//     }
//     if(config.width){
//         newSquare.area=config.width*config.width;
//     }
//     return newSquare;
// }
// let mySquare  = createSquare({color:'black'});
// console.log(mySquare);

//只读属性：在属性名前面添加readonly
// interface Point{
//     readonly x: number;
//     readonly y: number
// }
// let p1:Point={x:10,y:20};
// p1.x=5;//报错
// console.log(p1);

//typescript的ReadonlyArray<T>类型，与Array<T>相似，只是把所有可变方法去掉了,确保数组创建后不能被更改。
// let a:number[]=[1,2];
// let ro:ReadonlyArray<number>=a;
// ro[0]=12;//报错
// a=ro;//报错 可使用类型断言重写 a = ro as number[];

//readonly vs const:看它是当做变量还是属性。

//对于额外的属性检查，使用类型断言来解决。

//函数类型
// interface SearchFunc {
//     (source: string, substring: string): boolean
// }
// let mySearch: SearchFunc;
// mySearch = function (source: string, substring: string):boolean {
//     let result = source.search(substring);
//     return result > -1;
// }
// console.log(mySearch('abc','a'));//ture
// //对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，改写上面函数。对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
// let mySearch1:SearchFunc;
// mySearch1=function(src:string,sub:string):boolean{
//     let result = src.search(sub);
//      return result > -1;
// }
// console.log(mySearch1('abc','a'));//true


//可索引的类型
// interface StringArray {
//     [index:number]:string;
// }
// let myArray:StringArray;
// myArray=['Bob','Fred'];
// let myStr:string=myArray[0];
// console.log(myStr);//Bob

//ts支持两种索引签名：string和number
// class Animal {
//     name: string
// }
// class Dog extends Animal {
//     breed: string
// }
// interface NotOkay {
//     [x: number]: Animal;//报错
//     [x: string]: Dog
// }

//name的类型与字符串索引类型不匹配时会报错
// interface   NumberDictionary{
//     [index:string]:number;
//     length:number;
//     name:string//报错
// }

// //将索引设置为只读，防止给索引赋值
// interface ReadonlyStringArray{
//     readonly [index:number]:string;
// }
// let myArray:ReadonlyStringArray=['Alice','Bob'];
// myArray[1]='Joy';//报错 

//实现接口
// //在接口中描述一个方法，在类里实现它。接口描述了类的公共部分。
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }

//当一个类实现了一个接口时，只对其实例部分进行类型检查
// interface ClockConstructor {
//     new(hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface{
//     constructor(h:number,m:number){}
//     tick() {
//         console.log('beep beep');
//     }
// }
// class AnalogClock implements ClockInterface{
//     constructor(h:number,m:number){}
//     tick() {
//         console.log('tick tock');
//     }
// }

// let digital = createClock(DigitalClock,12,17);
// let analog= createClock(AnalogClock,7,32);

//继承接口使用extends
// interface Shape{
//     color:string;
// }
// interface PenStroke {
//     penWidth:number;
// }
// interface Square extends Shape,PenStroke{
//     sideLength:number;
// }
// let square=<Square>{};
// square.color="blue";
// square.sideLength=10;
// square.penWidth=2;

// console.log(square);//{color:blue,sideLength:10,penWidth:2}

//混合类型，即一个对象可以同时作为函数和对象使用，并带有额外的属性。
// interface Counter{
//     (start:number):string;
//     interval:number;
//     reset():void;
// }
// function getCounter():Counter{
//     let counter = <Counter>function (start:number){
//         console.log(start);
//     }
//     counter.interval=1;
//     counter.reset=function(){
//         console.log('reset')
//     }
//     return counter;
// };
// let c = getCounter();
// c(10);//10
// c.reset();//reset
// c.interval=5.0

//接口继承类：当一个接口继承类类型时，接口会继承类的成员但不包括其实现。当一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现。
class Control {
    private state: any;
}
interface SelectableControl extends Control {//接口SelectableControl继承了类Control,SelectableControl包含了Control的私有属性state，只有Control类或其子类才能实现SelectableControl
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class Image implements SelectableControl {// 错误：“Image”类型缺少“state”属性。
    select() { };
}