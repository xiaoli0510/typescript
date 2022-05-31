
export { }
/*
基础类型
*/
let isDone: boolean = false;//布尔值boolean
let decLiteral: number = 6;//数字number
let firstName: string = "bob";//字符串string
let list: number[] = [1, 2];//数组array
let list1: Array<number> = [1, 2];//数组array
let x: [string, number] = ['1', 2];//元组Tuple
enum Color { Red, Green, Blue };//枚举
let c: Color = Color.Green;
let notSure: any = 4;//any
function warnUser(): void {//空值void
    console.log('err')
}
let u: undefined = undefined;//undefined;
let n: null = null;//null
function error(message: string): never {//never
    throw new Error(message);
}
declare function create(o: object | null): void;//Object

//类型断言：告诉浏览器，我很清楚这个数据的类型
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string";
let strLength1: number = (someValue as string).length;