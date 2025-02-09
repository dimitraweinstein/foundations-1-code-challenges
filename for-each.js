// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.


Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

// Output:

// ['spot', 'rover', 'jumpy', 'einstein']


export function makeArrayOfNames(arr) {
    let namesArray = [];
    arr.forEach((item) => {
        console.log(item);
        namesArray.push(item.name)
    }) 
    return namesArray;
}


Output:

['cat', 'frog', 'dog', 'dog']


export function makeReversedArrayOfTypes(arr) {
    let reversedArray = [];
    arr.forEach((item) => {
        reversedArray.unshift(item.type)
    })

    return reversedArray;
}


Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]


export function makeSpanishLanguageArray(arr) {
    let spanishArray = [];
    arr.forEach((item) => {
        spanishArray.push(
        {nombre: item.name, tipo: item.type}
        )
    })

    return spanishArray;
}

