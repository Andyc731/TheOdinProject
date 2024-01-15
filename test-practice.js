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
        if (string.charCodeAt(i) + shift > 122) {
            newString += String.fromCharCode(96 + shift);
        } else if (string.charCodeAt(i) + shift > 90 && string.charCodeAt(i) + shift < 96) {
            newString += String.fromCharCode(64 + shift);
        } else {
            newString += String.fromCharCode(string.charCodeAt(i) + shift);
        }
    }
    return newString;
}
