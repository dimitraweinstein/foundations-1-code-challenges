// Use the map method to solve these problems!


Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]



Output:

['spot', 'rover', 'jumpy', 'einstein']


export function makeArrayOfNamesWithMap(arr) {
    const namesArray = arr.map(array => array.name)

    return namesArray;
}


Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]

export function makeArrayWithIsHungry(arr) {
    const hungryArray = arr.map(item => ({
        name: item.name,
        isHungry: true,
        type: item.type
        // console.log(item);
    }))

    return hungryArray;
}


Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]

export function makeShoutingArray(arr) {
    let shoutArray = arr.map(item => ({
        name: item.name.toUpperCase(),
        type: item.type
    }))

    return shoutArray;
}




Output:
['spotdog', 'roverdog', 'jumpyfrog', 'einsteincat']


export function makeStringArray(arr) {
    let stringArray = arr.map(item => (
        item.name + item.type 
    ))

    return stringArray;
}


Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
]

export function makeArrayOfArraysOfArrays(arr) {
    let arrayOfArrays = arr.map(item => [
        ['name', item.name], ['type', item.type]
    ])
    return arrayOfArrays;
}