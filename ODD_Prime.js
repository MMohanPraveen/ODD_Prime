/**
 * Check if a number is an ODD number.
 * A number is considered an ODD number if the absolute difference 
 * between each pair of consecutive digits is no more than 1.
 * 
 * @param {Number} num - The number to check.
 * @returns {Boolean} - Returns true if the number is an ODD number, false otherwise.
 */
function is_ODD(num) {
    let check = num;
    num = String(num).split('');
    if (num.length < 2) {
        return false;
    }

    for (let i = 0; i < num.length - 1; i++) {
        if (Math.abs(parseInt(num[i]) - parseInt(num[i + 1])) > 1) {
            return false;
        }
    }

    return true;
}

/**
 * Check if a number is prime.
 * A number is considered prime if it is greater than 1 and 
 * has no divisors other than 1 and itself.
 * 
 * @param {Number} num - The number to check.
 * @returns {Boolean} - Returns true if the number is prime, false otherwise.
 */
function is_Prime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    if (num === 2) return true; // 2 is a prime number
    if (num % 2 === 0) return false; // Even numbers other than 2 are not prime

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * Count the number of ODD prime numbers between 1 and 10,000,001.
 * 
 * @returns {Number} - Returns the count of ODD prime numbers in the specified range.
 */
function out_Count() {
    let count = 0;
    for (let num = 1; num <= 10000001; num++) {
        if (is_ODD(num)) {
            if (is_Prime(num)) {
                count++;
            }
        }
    }
    return count;
}

// Output the count of ODD prime numbers in the range.
console.log(out_Count());
