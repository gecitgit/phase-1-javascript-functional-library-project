//myEach(collection, callback) -- Iterates over the collection of elements, passing each element in turn to the callback function. Returns the original, unmodified, collection
function myEach(collection, callback) {
    for (let item in collection){
        callback(collection[item])
    }
    return collection
}


//myMap(collection, callback) -- Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.
function myMap(collection, callback) {
    let mappedArray = []

    for (let item in collection){
        mappedArray.push(callback(collection[item]))
        // console.log('this is item: ', item)
        // console.log('this is callbacked item: ', callback(collection[item]))
    }
    return mappedArray;
}

function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)){
        let copy = [...collection]
        acc = acc || copy.shift();
        for (let item in copy) {
            acc = callback(acc, copy[item], copy)
        }
        return acc;
    } else {
        const keys = Object.keys(collection)
        let copy = keys.map(key =>{
            return collection[key]
        })
        acc = acc || copy.shift();
        for (let item in copy) {
            acc = callback(acc, copy[item], copy)
        }
    }        
    return acc;
}
// function myReduce(collection, callback, acc) {
//     if (Array.isArray(collection)){
//         let copy = [...collection]
//         acc = acc || copy.shift();
//         for (let item in copy) {
//             acc = callback(acc, copy[item], copy)
//         }
//         return acc;
//     } else {
//         const keys = Object.keys(collection)
//         let copy = myMap(keys)
//         acc = acc || copy.shift();
//         for (let item in copy) {
//             acc = callback(acc, copy[item], copy)
//         }
//     }        
//     return acc;
// }


//myFind(collection, predicate) -- check READMEnah
function myFind(collection, predicate) {
    for (let item in collection){
        let element = collection[item];
        if (predicate(element)) {
            return element;
        }
    }
}


//myFilter(collection, predicate)
function myFilter(collection, callback) {
    let matches = [];
    for (let item in collection) {
        let element = collection[item];
        if (callback(element)) {
            matches.push(element);
        } 
    } return matches

}

//mySize(collection) -- array or object
function mySize(collection){
    return Object.keys(collection).length
}

//myFirst(array, n)
function myFirst(array, n = 1){
    let count = 1;
    let newArray = [];

    for (let item in array) {
        if (count <= n) {
            newArray.push(array[item]);
            count++
        }
    }
    return newArray.length > 1 ? newArray : newArray[0]
}

//myLast(array, [n])
function myLast(collection, n=1) {
    let startingIndex = collection.length - n;

    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex];
}

//myKeys(object)
function myKeys(object) {
    let keyArray = []
    for (let item in object) {
        keyArray.push(item)
    }
    return keyArray
}

//myValues(object)
function myValues(object) {
    let valueArray = []
    for (let item in object) {
        valueArray.push(object[item])  
    }
    return valueArray
}