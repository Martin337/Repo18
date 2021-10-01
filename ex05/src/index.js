let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
])

let arrKey = [];
for(let key of shoppingList) arrKey.push(key[0]);
for(let element of arrKey) console.log("groceries: " + element);
let arrValue= [];
for(let value of shoppingList) arrValue.push(value[1]);
for(let element of arrValue) console.log("amount: " + element);
for(let pair of shoppingList.entries()) console.log(pair);

module.exports = { shoppingList, arrKey, arrValue };