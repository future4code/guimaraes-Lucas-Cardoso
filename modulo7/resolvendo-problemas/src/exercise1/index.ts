const checkOneEdit = (string1: string, string2: string): boolean => {
    if (Math.abs(string1.length - string2.length) > 1) {
        return false
    }

    if (string1.length > string2.length) {
        return string1.includes(string2)
    }

    if (string2.length > string1.length) {
        return string2.includes(string1)
    }

    let charsDiffCount = 0
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) charsDiffCount++
    }

    return charsDiffCount === 1
}

console.log(checkOneEdit("banan", "banana"))
console.log(checkOneEdit("bananak", "banana"))
console.log(checkOneEdit("panana", "banana"))
console.log(checkOneEdit("bananaaa", "banana"))

const stringCompress = (str: string): string => {
    let output: any[] = [str[0]]
    let charCompare: string = str[0]
    let charCounter: number = 1

    for (let i = 1; i < str.length; i++) {
        if (str[i] === charCompare) {
            charCounter++
        }
        
        else {
            output.push(String(charCounter))
            charCounter = 1
            output.push(str[i])
            charCompare = str[i]
        }
    }

    output.push(charCounter)

    const compressedStr = output.join('')

    if (str.length < compressedStr.length) {
        return str
    }

    return compressedStr
}

console.log(stringCompress("aabbb"))
console.log(stringCompress("aabcccccaaa"))
console.log(stringCompress("accurate"))
console.log(stringCompress("escola"))
console.log(stringCompress("accuraaaaaaaaaate"))