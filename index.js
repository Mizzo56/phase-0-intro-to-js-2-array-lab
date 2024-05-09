const cats = ["Milo", "Otis", "Garfield"];
cats.length
function destructivelyAppendCat(catName){cats.push(catName)}
;
function destructivelyPrependCat(catName){cats.unshift(catName)};
function destructivelyRemoveLastCat(catName){cats.pop(catName)};
function destructivelyRemoveFirstCat(catName){cats.shift(catName)};

function appendCat(name){
const copyOfCats = [...cats]
copyOfCats.push(name)
return copyOfCats
}
function prependCat(name){
const copyOfCats = [...cats]
copyOfCats.unshift(name)
    return copyOfCats
}
function removeLastCat(name){
const copyOfCats = [...cats]
copyOfCats.pop(name)
return copyOfCats
}
function removeFirstCat(name){
    const copyOfCats = [...cats]
    copyOfCats.shift(name)
    return copyOfCats
}
