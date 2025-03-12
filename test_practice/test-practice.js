export function capitalize(string) {
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
}

export function reverseString(string) {
    let newString = '';
    while (string) {
        newString += string.charAt(string.length - 1);
        string = string.slice(0, -1);
    }
    return newString;
}

export const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },

    subtract: function(num1, num2) {
        return num1 - num2;
    },

    divide: function(num1, num2) {
        return num1 / num2;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    }
}

export function caesarCipher(string, shift) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (checkRange(string.charCodeAt(i))) {
            newString += getChar(string.charCodeAt(i), shift);
        } else {
            newString += string.charAt(i);
        }
    }
    function checkRange(code) {
        return (code < 123 && code > 96) || (code < 91 && code > 64);
    }

    function getChar(code, shift) {
        if (code + shift > 122) {
            return String.fromCharCode(96 + shift)
        } else if (code + shift > 90 && code + shift < 96) {
            return String.fromCharCode(64 + shift);
        } else {
            return String.fromCharCode(code + shift);
        }
    }

    return newString;
}

export function analyzeArray(array) {
    const average = array.reduce(
        (acc, current) => acc + current,
        0
    ) / array.length
    

    return {average: average, length: array.length, max: Math.max(...array), min: Math.min(...array)};
}
