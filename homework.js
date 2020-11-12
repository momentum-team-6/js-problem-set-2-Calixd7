// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
function remove(array, itemToRemove) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== itemToRemove) {
    result.push (array[i])
    }
}      
    return result
}
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum(array) {
    let sum = 0
        for (let i = 0; i < array.length; i++)
    sum += array[i]
    return sum
}
// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(array) {
    if (array.length === 0)
        return
    return sum(array) / array.length
}
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(array) {
    if (array.length === 0) {
        return 
    }
    let minimum = array [0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i]
        }
    }
    return minimum
}
// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.


function Idx(array, goal) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === goal) {
            return i
        }
    }
}


function selectionSort(unsortednumbers) {
    let array = unsortednumbers.slice(0);
    let output = []
    for (let i = 0; i < unsortednumbers.length; i++) {
        output.push(minimum(array))
        array.splice(Idx(array, minimum(array)), 1)
    } return output
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
function textList(Array) {
    let result = ""
    for (let i = 0; i < Array.length; i++) {
        result += Array[i]
        if (i < Array.length-1) {
           result += ','
        }
    }
    return result
}
