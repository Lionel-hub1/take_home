function transformString(inputStr) {
    const { length } = inputStr;

    // Checking by 3 and 5
    if (length % 15 === 0) {
        return inputStr.split('').reverse().join('');
    }

    // Checking by 3
    else if (length % 3 === 0) {
        return inputStr.split('').reverse().join('');
    }

    // Checking by 5
    else if (length % 5 === 0) {
        return inputStr.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    else {
        return inputStr;
    }
}

// Testing if it works
console.log(transformString("Hamburger"));
console.log(transformString("Pizza"));
console.log(transformString("Chocolate Chip Cookie"));
