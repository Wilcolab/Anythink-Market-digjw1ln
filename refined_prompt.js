/**
 * Converts a given string to robust camelCase format.
 * * It handles null, undefined, or non-string inputs by returning an empty string.
 * It efficiently splits the string by spaces, underscores, and hyphens, 
 * converting the input into a standard camelCase format.
 * * @param {*} input - The input value (expected to be a string) to be converted.
 * @returns {string} - The converted string in camelCase format. 
 * Returns an empty string if the input is not a valid string or
 * if it contains no words after trimming.
 * * @example
 * // returns 'firstName'
 * toCamelCaseSafe('first name');
 * * @example
 * // returns 'userId'
 * toCamelCaseSafe('user_id');
 * * @example
 * // returns 'mobileNumber'
 * toCamelCaseSafe('mobile-number');
 * * @example
 * // returns ''
 * toCamelCaseSafe(null); // invalid input type
 */
function toCamelCaseSafe(input) {
    if (typeof input !== 'string') {
        return '';
    }

    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return '';
    }

    const words = trimmed
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        return '';
    }

    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            if (index === 0) {
                return lowerWord;
            }
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}


/**
 * Converts a given string to dot case format.
 * * Dot case format is defined as all words in lowercase, 
 * separated by dots. Non-alphanumeric characters are used 
 * as delimiters to identify words.
 * * @param {string} input - The input string to be converted.
 * @returns {string} - The converted string in dot case format. 
 * Returns an empty string if the input is 
 * not a valid string or if it contains no 
 * words after trimming.
 * * @example
 * // returns 'hello.world'
 * toDotCase('Hello World');
 * * @example
 * // returns 'example.test'
 * toDotCase('Example   Test!');
 * * @example
 * // returns ''
 * toDotCase('   '); // empty input
 * * @example
 * // returns ''
 * toDotCase(123); // invalid input type
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        return '';
    }

    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return '';
    }

    const words = trimmed
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        return '';
    }

    return words.map(word => word.toLowerCase()).join('.');
}

// Export both functions for use in modules
module.exports = { toCamelCaseSafe, toDotCase };