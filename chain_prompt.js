/**
 * Converts a given string to kebab-case.
 * 
 * Kebab-case is a string format where words are separated by hyphens and all letters are lowercase.
 * This function replaces spaces, underscores, and camelCase boundaries with a hyphen.
 * 
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} The kebab-case version of the input string, or an empty string if the input is invalid.
 * 
 * @example
 * // returns "user-id"
 * toKebabCase("User ID");
 * 
 * @example
 * // returns "user-id"
 * toKebabCase("user_id");
 * 
 * @example
 * // returns "user-id"
 * toKebabCase("userID");
 * 
 * @example
 * // returns ""
 * toKebabCase(null);
 * 
 * @example
 * // returns ""
 * toKebabCase(123);
 */
function toKebabCase(input) {
    if (typeof input !== 'string' || input == null) {
        return '';
    }
    
    return input
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Replace camelCase boundaries with hyphens
        .toLowerCase(); // Convert to lowercase
}