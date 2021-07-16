// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const names = [];
    arr.forEach(item =>{
        names.push(item.name)
    })
        return names;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reverseTypes = [];
    arr.forEach(item =>{
        reverseTypes.push(item.type)
        reverseTypes.reverse(item.type)
    })
    return reverseTypes;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArray = [];
    arr.forEach(item =>{
        const spanishLanguage = {nombre: item.name, tipo: item.type};
        newArray.push(spanishLanguage)
    })
    return newArray;
}

