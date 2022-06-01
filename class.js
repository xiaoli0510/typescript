"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//类：ts允许使用继承来扩展现有的类
//类继承类，使用extends，类从基类中继承了属性和方法。
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// dog.bark();//Woof! Woof!
// dog.move(10);//Animal moved 10m.
// dog.bark();//Woof! Woof!
//派生类中调用super(),它会执行基类的构造函数。在子类里可以重写父类的方法。
// class Animal{
//     name:string;
//     constructor(theName:string){
//         this.name=theName;
//     }
//     move(distanceInMeters:number=0){
//         console.log(`${this.name} moved ${distanceInMeters}m.`)
//     }
// }
// class Snake extends Animal{
//     constructor(name:string){
//         super(name);
//     }
//    move(distanceInMeters=5) {
//        console.log('slithering...');
//        super.move(distanceInMeters);
//    }
// }
// class House extends Animal{
//     constructor(name:string){
//         super(name);
//     }
//     move(distanceInMeters=45) {
//         console.log('Galloping...');
//         super.move(distanceInMeters);
//     }
// }
// let sam=new Snake('Sammy the Python');
// let tom:Animal=new House('Tommy the Palomino');
// sam.move();// slithering... Sammy the Python moved 5m;
// tom.move(34);//Galloping... Tommy the Palomino moved 34m.
//类的实例成员：当类被实例化的时候才会被初始化的属性;当类被实例化的时候才会初始化的属性，此时修饰符有private|protected|public
//公共，私有与受保护的修饰符
//默认为public
// class Animal{
//     public name:string;
//     public constructor(theName:string){
//         this.name=theName;
//     }
//     public move(distanceInMeters:number){
//         console.log(`${this.name} moved ${distanceInMeters}m.`)
//     }
// }
//私有private，私有属性不能在声明它的类的外部访问。
//如果一个类型里包含一个private成员，当另外一个类型中也存在这样一个private成员，并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。对于protected成员也使用这个规则。
// class Animal{
//     private name:string;
//     constructor(theName:string){
//         this.name=theName;
//     }
// }
// new Animal('Cat').name;//报错 name是私有的
//protected属性，与private的区别是，protected属性在派生类中可以访问。
// class Person{
//     protected name:string;
//     constructor(name:string){
//         this.name=name;
//     }
// }
// class Employee extends Person{
//     private department:string;
//     constructor(name:string,department:string){
//         super(name);
//         this.department=department;
//     }
//     public getElevatorPitch(){
//         return `Hello,my name is ${this.name} and I work in ${this.department}`;
//     }
// }
// let howard = new Employee('Howard','Sales');
// console.log(howard.getElevatorPitch());
// console.log(howard.name);//报错 只能在Person类里面和Person的派生类里面使用name属性
//被protocted标记的构造函数，不能在包含它的类外被实例化，但是能被继承。
// class Person{
//     protected name:string;
//     protected constructor(theName:string){
//         this.name=theName;
//     }
// }
// class Employee extends Person{
//     private department:string;
//     constructor(name:string,department:string){
//         super(name);
//         this.department=department;
//     }
//     public getElevatorPitch(){
//         return `Hello,my name is ${this.name} and I work in ${this.department}`;
//     }
// }
// let howard  = new Employee('Howard','Sales');
// let john = new Person('John');//报错，因为Person中的constructor是protected，只能在Person类里面或者Person的派生类中使用constructor
//readonly修饰符
//用readonly将属性设置成只读，只读属性必须在声明时或构造函数里面被初始化。
// class Octopus{
//     readonly name:string;
//     readonly numbersOfLegs:number=8;
//     constructor(theName:string){
//         this.name=theName;
//     }
// }
// let dad = new Octopus('Man with the 8 strong legs');
// dad.name='man';//报错
//参数属性：在构造函数里面使用 readonly name:string参数来创建和初始化name成员，把声明和赋值合并在一处。
// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {
//         this.name = name;
//     }
// }
// let dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'man';//报错
//存取器
// let passcode = "secret passcode";
// class Employee {
//     private _fullName: string;
//     get fullName(): string {
//         return this._fullName;
//     }
//     set fullName(newName: string) {
//         if (passcode && passcode == 'secret passcode') {
//             this._fullName = newName;
//         } else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
// let employee = new Employee();
// employee.fullName = "Bob";
// if (employee.fullName) {
//     console.log(employee.fullName);//Bob
// }
//类的静态成员，即静态属性存在于类本身上面而不是类的实例上，修饰符有static,需通过类名.xx来访问。
//静态属性static
// class Grid{
//     static origin = {x:0,y:0};
//     calculateDistanceFromOrigin(point:{x:number,y:number}){
//         let xDist  = (point.x-Grid.origin.x);
//         let yDist  = (point.y-Grid.origin.y);
//         return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale;
//     }
//     constructor(public scale:number){
//     }
// } 
// let grid1= new Grid(1.0);
// let grid2 = new Grid(5.0);
// console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}));
// console.log(grid2.calculateDistanceFromOrigin({x:10,y:10}));
//抽象类abstract class xx;抽象类作为其他派生类的基类使用，一般不会直接被实例化。跟interface不同的是，抽象类可以包含成员的实现细节。抽象类中不包含具体实现并且必须在派生类中实现。
// abstract class Department {
//     constructor(public name:string){
//     }
//     printName():void{
//         console.log('Department name: '+this.name);
//     }
//     abstract printMeeting():void;
// }
// class AccountingDepartment  extends Department{
//     constructor(){
//         super('Accounting and Auditing');//派生类中的constructor中调用super()
//     }
//     printMeeting():void{
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }
//     generateReports():void{
//         console.log('Generating accounting reports...');
//     }
// }
// let department:Department;
// department  = new Department;//报错 抽象类不能直接被实例化
// department= new AccountingDepartment();
// department.printName();//Department name:Accounting and Auditing
// department.printMeeting();//The Accounting Department meets each Monday at 10am.
// department.generateReports();//报错 抽象类Department上没有generateReports方法
//构造函数：在ts里面声明一个类时，实际上声明了类的实例的类型是构造函数的类型。
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return 'Hello, ' + this.greeting;
//         } else {
//             return Greeter.standardGreeting;
//         }
//     }
// }
// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());//Hello, there
// let greeterMarker: typeof Greeter = Greeter;
// greeterMarker.standardGreeting ="Hey there!";
// let greeter2:Greeter= new greeterMarker();
// console.log(greeter2.greet());//Hello, there
//把类当做接口使用
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d); //{ x: 1, y: 2, z: 3 }
