//泛型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//使用类型变量T,它是一种特殊的变量，只用于表示类型而不是值。
//一：定义泛型函数：参数类型与返回值类型是相同的，允许我们跟踪函数里使用的类型的信息。
// function identity<T>(arg: T): T {
//     console.log(arg.length);//报错，因为必须把参数T当做是任意或所有类型
//     return arg;
// }
// //二：使用泛型变量：
// //方法1：使用<>
// let output=identity<string>("myString");
// //方法2：利用类型推论-编译器会根据传入的参数自动确定T的类型。
// //编译器可以查看myString的值，然后把T设置为它的类型。
// let output1=identity("myString");
// console.log(output,output1)
//定义参数是数组的泛型函数
// function loggingIdentity<T>(args: T[]): T[] {
//     console.log(args.length);
//     return args;
// }
// console.log(loggingIdentity([1,'a']));//2 [1,'a']
// function loggingIdentity1<T>(args: Array<T>): Array<T> {
//     console.log(args.length);
//     return args;
// }
// console.log(loggingIdentity1([1,'aa']));//2 [1,'aa']
//三：泛型类型；
// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity:<T>(arg:T)=>T=identity;//说明泛型函数myIdentity的类型是identity。
// let myIdentity1:<U>(arg:U)=>U=identity;//可使用不同的泛型参数名，只要在数量上和使用方式上能对应即可。
// let myIdentity2:{<T>(args:T):T}=identity;//可使用对象字面量来定义泛型函数
// console.log(myIdentity('a'));//a
// console.log(myIdentity1(1));//1
// console.log(myIdentity2(2));//2
//四：泛型接口
// interface GenericIdentityFn {
//     <T>(arg:T):T
// }
// function identity<T>(arg:T):T{
//     return arg;
// }
// let myIdentity:GenericIdentityFn=identity;
//改写上面的泛型接口，将参数放在接口上。这样能清楚的知道使用的具体是哪个泛型类型。
// interface GenericIdentityFn<T> {
//     (arg: T): T;
// }
// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity:GenericIdentityFn<number>=identity;
// console.log(myIdentity(123));//123
//五：泛型类。直接把泛型类型放在类后面，可帮助我们确认类的所有属性都在使用相同的类型。泛型类指的是实例部分的类型，类的静态属性不能使用泛型类型。
// class GenericNumber<T>{
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) { return x + y };
//六：泛型约束：定义一个接口来约束条件。
// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }
// loggingIdentity(3);//报错 因为3没有length属性
//七：在泛型里使用类类型。
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
