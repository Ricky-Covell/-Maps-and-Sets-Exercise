// Maps and Sets Exercise


// Quick Question #1
    // ​ANSWER: {1, 2, 3, 4}




// Quick Question #2
    // ANSWER: 'ref'



// Quick Questions #3
    // ANSWER: {Array(3) => true, Array(3) => false}



// hasDuplicate
    // ANSWER:
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;



// vowelCount
    // ANSWER:
function isVowel(char){
    const vowels = 'aeiou'
    return vowels.includes(char);
}

function vowelCount(str){
    let lowercaseStr = str.toLowerCase();
    const vowelMap = new Map();
    for (let char of lowercaseStr) {
        if (vowelMap.has(char)) {
            vowelMap.set(char, vowelMap.get(char) + 1);
        } else if (isVowel(char)) {
            vowelMap.set(char, 1);
        }
    }
    return vowelMap;
}
