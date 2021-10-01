let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

let newRock = new Map();

for(let entry of rockStar.entries()){
    if(entry[0][0] > "a"){
        newRock.set(entry[0], entry[1]);
    }
}
console.log(newRock);
module.exports = {rockStar, newRock};