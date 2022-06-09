// 推断类型：ts编译器会自动识别类型,即按上下文归类。
// let myAdd = function (x: number, y: number): number { return x + y };;
// let myAdd1: (baseValue: number, increment: number) => number =
//     function (x, y) { return x + y; }
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log(pickedCard.card, pickedCard.suit);
