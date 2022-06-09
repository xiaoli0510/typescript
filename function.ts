// 推断类型：ts编译器会自动识别类型,即按上下文归类。
// let myAdd = function (x: number, y: number): number { return x + y };;
// let myAdd1: (baseValue: number, increment: number) => number =
//     function (x, y) { return x + y; }

//ts里面每个函数的参数都是必须的，使用可选参数和默认参数来实现参数可不传
// function buildName(firstName: string, lastName: string) {
//     return firstName + ' ' + lastName;
// }
// let result1 = buildName('Bob');//报错
// let result2 = buildName('Bob', 'Adams', 'Sr.');//报错
// let result3 = buildName('Bob', 'Adams');

//可选参数必须跟在必须参数后面
// function buildName1(firstName: string, lastName?: string) {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     }else{
//         return firstName;
//     }
// }
// let result1 = buildName1('Bob11');
// let result2 = buildName1('Bob', 'Adams', 'Sr.');//报错
// let result3 = buildName1('Bob', 'Adams');

//默认参数使用=来实现。默认参数不需要放在必须参数后面，，若放在必须参数前面，调用时需传入undefined。
// function buildName2(firstName: string, lastName = "Smith") {
//     return firstName + lastName;
// }
// let result1=buildName2('Bob');
// let result2=buildName2('Bob',undefined);
// let result3=buildName2("Bob", "Adams", "Sr.");//报错
// let result4 = buildName2("Bob", "Adams"); 

//剩余参数使用...来实现
// function buildName3(firstName:string,...restOfName:string[]){
//     return firstName+' '+restOfName.join(' ');
// }
// let buildName3Fun:(fname:string,...rest:string[])=>string=buildName3;

//this和箭头函数
//一般的函数里面的this是谁执行就执行谁，箭头函数里面的this指定义箭头函数时this的指向而非箭头函数执行时的this指向。
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array[52],
//     createCardPicker: function () {
//         return function () {
//                 let pickedCard = Math.floor(Math.random()) * 52;
//                 let pickedSuit = Math.floor(pickedCard / 13);
//                 return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//         }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log(pickedCard.card, pickedCard.suit);//报错 因为createCardPicker返回的函数里的this被设置成了window

//使用箭头函数解决this指向
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array[52],
//     createCardPicker: function () {
//             return ()=> {
//                 let pickedCard = Math.floor(Math.random()) * 52;
//                 let pickedSuit = Math.floor(pickedCard / 13);
//                 return { suit: this.suits[pickedSuit], card: pickedCard % 13 };//此时this执行deck
//             }
//     }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log(pickedCard.card, pickedCard.suit);

//添加接口Card和Deck改写上面的函数
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };//此时this是Deck类型
        }
    }
}
let cardPicker = deck.createCardPicker();//ts知道在Deck某个对象上使用createCardPicker
let pickedCard = cardPicker();
console.log(pickedCard.card,pickedCard.suit);
