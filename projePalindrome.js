function palindromeChecker (str) {
    let lowerStr = str.toLowerCase();
    let length = lowerStr.length ;
    
    for (let i = 0 ; i < length / 2 ; i++) {
        if (lowerStr[i] !== lowerStr [length - 1 - i ]) {
            return false ; 
        }
    }

    return true ;

}

console.log(palindromeChecker("Racecar"));
console.log(palindromeChecker("Level"));
console.log(palindromeChecker("John Doe"));
console.log(palindromeChecker("Patika"));
console.log(palindromeChecker("Civic"));


