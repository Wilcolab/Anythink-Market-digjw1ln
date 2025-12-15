function stringToCamelCase(str) {
    return str
        .split(/[\s-]+/) // Split by spaces or hyphens
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

module.exports = stringToCamelCase;