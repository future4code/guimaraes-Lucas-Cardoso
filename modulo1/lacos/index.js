// 1. 10

// 2. a) 19; 21; 23; 25; 27; 30;
//    b) Sim. for (let i = 0; i < array.length; i++) {}

// 3. *
//    **
//    ***
//    ****



// 1.
const petsAmount = Number(prompt('Digite quantos animais de estimação você possui'))
let petsNames = []

function umOuMais (qnt) {
    if (qnt === 1) {
        return 'Digite o nome dele(a)'
    } else {
        return 'Digite o nome de um deles(as)'
    }
}

if (petsAmount === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else if (petsAmount > 0) {
    for (let i = 0; i < petsAmount; i++) {
        let petName = prompt(umOuMais(petsAmount))
        petsNames.push(petName)
    }
}

console.log(petsNames)


// 2.
const arrayOriginal = [1, 2, 3, 4, 5, 6]

function printNumbers (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function printDividedBy10 (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] / 10)
    }
}

function onlyEvens (array) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            output.push(array[i])
        }
    }
    console.log(output)
}

function arrayWithMessage (array) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(`O elemento do index ${i} é: ${array[i]}`)
    }
    console.log(output)
}

function highestAndLowest (array) {
    let highest = array[0]
    let lowest = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highest) {
            highest = array[i]
        }
        if (array[i] < lowest) {
            lowest = array[i]
        }
    }
    console.log(highest)
    console.log(lowest)
}